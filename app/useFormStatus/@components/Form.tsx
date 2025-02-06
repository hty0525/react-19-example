"use client";

import React, { useState } from "react";
import { delay } from "@/app/@utils";
import { useFormStatus } from "react-dom";
import Button from "./Button";

export default function Form() {
	const [posts, setPosts] = useState<string[]>([]);

	// 자식 요소 안에서만 사용 가능하면 굳이 이게 필요할까..?
	const { data, pending } = useFormStatus();

	// 동시 사용이 가능하다.....??
	const onSubmit = async (e) => {
		const form = e.target;
		const formData = new FormData(form);

		const content = formData.get("content");
		console.log(content);
		console.log("???????");
	};

	return (
		<>
			<form
				className="w-full text-right mb-10"
				onSubmit={onSubmit}
				action={handleSubmit}
			>
				<textarea name="content" className="w-full h-52 p-2 mb-5 border-2" />
				<Button />
			</form>
			<ul className="flex flex-col gap-5">
				{posts?.map((post, index) => (
					<li key={index} className="p-4 border-2 border-cyan-600">
						{post}
					</li>
				))}
			</ul>
		</>
	);
}

async function handleSubmit() {
	await delay(2000);
}
