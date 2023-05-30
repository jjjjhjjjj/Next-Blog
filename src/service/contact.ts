export type ContactFormData = {
  email: string;
  subject: string;
  message: string;
};

export async function submitForm(formData: ContactFormData) {
  const res = await fetch(`/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}
