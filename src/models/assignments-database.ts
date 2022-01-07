import Assignment from "./Assignment";

let nextId: number = 1;
export let data: Assignment[] = [];

createAssignment({ name: "WW1 Quiz", score: 5, possible: 10, completed: true });
createAssignment({ name: "WW1 Test", score: 8, possible: 10, completed: true });
createAssignment({
	name: "WW2 Quiz",
	score: 0,
	possible: 15,
	completed: false,
});
createAssignment({
	name: "WW2 Test",
	score: 20,
	possible: 20,
	completed: true,
});

export function createAssignment(assignment: Assignment): void {
	assignment.id = nextId++;
	data.push(assignment);
}

export function allAssignments(): Assignment[] {
	return data;
}

export function assignmentById(id: number): Assignment | undefined {
	return data.find((assignment) => assignment.id === id);
}

export function findAverage(data: Assignment[]): number {
	let scoreTotal: number = 0;
	let possibleTotal: number = 0;
	let completed: Assignment[] = data.filter((item) => item.completed === true);
	completed.forEach((item) => (scoreTotal += item.score));
	completed.forEach((item) => (possibleTotal += item.possible));
	let average = scoreTotal / possibleTotal;
	return average ? average : 0;
}

export function deleteAssignment(id: number): boolean {
	const index = data.findIndex((item) => item.id === id);
	if (index == -1) {
		return false;
	} else {
		data.splice(index, 1);
		return true;
	}
}
