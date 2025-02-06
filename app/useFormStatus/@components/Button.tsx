"use client";

import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function Button() {
	const { data, pending } = useFormStatus();
	console.log("pending", pending);

	useEffect(() => {
		console.log("data", data?.get("content"));
	}, [data]);
	return (
		<button
			type="submit"
			className="p-2 bg-[powderblue] rounded-sm"
			disabled={pending}
		>
			{pending ? "제출중" : "제출하기"}
		</button>
	);
}
