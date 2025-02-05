"use client";

import { useActionState } from "react";
import { delay } from "@/app/@utils";

export function ActionStateExample({}) {
	const [posts, formAction, isPending] = useActionState<string[], FormData>(
		addContent,
		[]
	);

	return (
		<>
			<form className="w-full text-right mb-10" action={formAction}>
				<textarea
					name="content"
					className="w-full h-52 p-2 mb-5 border-2"
					disabled={isPending}
				/>
				<button className="p-2 bg-[powderblue] rounded-sm" disabled={isPending}>
					게시글 {isPending ? "작성 중" : "작성하기"}
				</button>
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

async function addContent(
	previousState: string[],
	formData: FormData
): Promise<string[]> {
	try {
		await delay(2000);

		const content = formData.get("content");
		if (!content) {
			return previousState;
		}

		if (typeof content === "string") {
			return [...previousState, content];
		}

		return previousState;
	} catch (error) {
		console.log(error);
		return previousState;
	}
}
