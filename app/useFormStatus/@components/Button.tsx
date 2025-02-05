"use client";

import React from "react";
import { useFormStatus } from "react-dom";

export default function Button() {
	const { data, pending } = useFormStatus();
	console.log(data && data.get("test"));
	return (
		<button type="submit" disabled={pending}>
			{pending ? "제출중" : "제출하기"}
		</button>
	);
}
