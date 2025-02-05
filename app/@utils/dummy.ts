import { delay } from "./delay";

export async function updateName(name: string) {
	await delay(2000);
	if (!name) {
		return "Name is required";
	} else {
		throw new Error("Name is required");
	}
}

export async function updateItemName(name: string) {
	await delay(2000);
	return name;
}
