"use client";

import React, { useTransition } from "react";
import { delay } from "../@utils";

export default function Page() {
	const [isPending, startTransition] = useTransition();

	const handleSubmit = () => {
		startTransition(async () => {
			await delay(2000);
		});
	};

	return (
		<div>
			<button onClick={handleSubmit} disabled={isPending}>
				{isPending ? "Update" : "submit"}
			</button>
		</div>
	);
}
