"use server"

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  try {
    // Using Resend to send emails
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "bnandintsetseg74@gmail.com",
        subject: `New Contact Form Message from ${formData.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[v0] Email send error:", error)
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
