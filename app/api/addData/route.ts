import { NextResponse } from "next/server";
import { z } from "zod";
import { google } from "googleapis";

// ✅ Your Zod schema
const nominationSchema = z.object({
  category: z.string().min(1, "Please select an award category"),

  nomineeName: z.string().min(2, "Nominee name must be at least 2 characters"),
  nomineeTitle: z.string().optional(),
  nomineeEmail: z.string().email("Invalid email address").optional().or(z.literal("")),
  nomineePhone: z.string().optional(),
  nomineeOrganization: z.string().optional(),
  nomineeAddress: z.string().optional(),

  nominationSummary: z.string().min(50).max(2500),
  keyAchievements: z.string().min(100).max(5000),
  impactDescription: z.string().min(100).max(5000),
  innovationAspects: z.string().max(2500).optional(),

  nominatorName: z.string().min(2),
  nominatorTitle: z.string().optional(),
  nominatorEmail: z.string().email(),
  nominatorPhone: z.string().optional(),
  nominatorOrganization: z.string().optional(),
  relationship: z.string().min(1),

  ref1Name: z.string().min(2),
  ref1Title: z.string().min(2),
  ref1Email: z.string().email(),
  ref1Phone: z.string().optional(),
  ref1Organization: z.string().optional(),
  ref1Relationship: z.string().min(1),

  ref2Name: z.string().min(2),
  ref2Title: z.string().min(2),
  ref2Email: z.string().email(),
  ref2Phone: z.string().optional(),
  ref2Organization: z.string().optional(),
  ref2Relationship: z.string().min(1),

  accuracy: z.boolean().refine((val) => val === true),
  consent: z.boolean().refine((val) => val === true),
  references: z.boolean().refine((val) => val === true),
  terms: z.boolean().refine((val) => val === true),
  evaluation: z.boolean().refine((val) => val === true),
});

// ✅ Google Sheets Setup
const SPREADSHEET_ID = process.env.SHEET_ID!;
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ Validate
    const parsed = nominationSchema.parse(body);

    // ✅ Save to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [Object.values(parsed)], 
      },
    });

    return NextResponse.json({ success: true, message: "Nomination submitted successfully" });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
