// app/contact/ContactFormClient.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ContactFormClient() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [agree, setAgree] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	function validate() {
		if (!name.trim()) return "Name is required";
		if (!email.trim()) return "Email is required";
		if (!message.trim() || message.trim().length < 10)
			return "Message must be at least 10 characters";
		if (!agree) return "Please accept the terms";
		return null;
	}

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);
		const v = validate();
		if (v) return setError(v);

		setSubmitting(true);
		try {
			// placeholder: replace with API call or email service
			await new Promise((r) => setTimeout(r, 700));
			setSuccess(true);
			setName("");
			setEmail("");
			setPhone("");
			setMessage("");
			setAgree(false);
		} catch {
			setError("Failed to submit. Please try again.");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<form onSubmit={onSubmit} className="space-y-4 w-full">
			{error && <p className="text-sm text-red-400">{error}</p>}
			{success && (
				<p className="text-sm text-green-400">
					Thanks — we&apos;ll be in touch shortly.
				</p>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
				<div>
					<Label>Name</Label>
					<Input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter your name"
						className="mt-1"
					/>
				</div>

				<div>
					<Label>Email</Label>
					<Input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="you@example.com"
						type="email"
						className="mt-1"
					/>
				</div>
			</div>

			<div>
				<Label>Phone</Label>
				<Input
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="Optional"
					className="mt-1"
				/>
			</div>

			<div>
				<Label>Message</Label>
				<Textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="How can we help?"
					className="mt-1 min-h-[120px]"
				/>
			</div>

			<div className="flex items-start gap-2">
				<Checkbox
					id="contact-agree"
					checked={agree}
					onCheckedChange={(v) => setAgree(Boolean(v))}
				/>
				<Label>
					I agree for Fainzy Technologies to process my data in accordance to
					their Terms of Service and Privacy Policy.
				</Label>
			</div>

			<div>
				<Button
					type="submit"
					disabled={submitting}
					className="w-full bg-neutral-50 text-[#0a0a0b] hover:bg-neutral-200"
				>
					{submitting ? "Submitting..." : "Submit"}
				</Button>
			</div>
		</form>
	);
}
