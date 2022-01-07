import Assignment from "./Assignment";

let nextId: number;
let data: Assignment[] = [];

createAssignment({ name: "WW1 Quiz", score: 5, possible: 10, completed: true });
createAssignment({ name: "WW1 Test", score: 7, possible: 10, completed: true });
createAssignment({
	name: "WW2 Quiz",
	score: 10,
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
