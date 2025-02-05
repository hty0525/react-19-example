"use client";

import React from "react";
import Button from "./Button";
import { delay } from "@/app/@utils";
import { Input } from "./Input";

export default function Form() {
	return (
		<form action={handleSubmit}>
			<Button />
			<Input />
		</form>
	);
}

async function handleSubmit() {
	await delay(2000);
}
