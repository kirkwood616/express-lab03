import Assignment from "../src/models/Assignment";
import { findAverage } from "../src/models/assignments-database";

describe("Testing findAverage function", () => {
	test("Test new array for correct average percentage w/ True & False completed values", () => {
		let data: Assignment[] = [
			{ name: "Biology Quiz", score: 10, possible: 15, completed: true },
			{ name: "Physics Lab", score: 0, possible: 10, completed: false },
			{ name: "Biology Test", score: 9, possible: 10, completed: true },
			{ name: "Phys Ed Assessment", score: 13, possible: 20, completed: true },
			{ name: "Physics Test", score: 8, possible: 10, completed: false },
		];
		expect(findAverage(data)).toBeCloseTo(0.71111111111);
	});
	test("Test new array for correct average percentage w/ True & False completed values", () => {
		let data: Assignment[] = [
			{ name: "Algebra Quiz", score: 0, possible: 15, completed: false },
			{ name: "Government Test", score: 5, possible: 6, completed: true },
			{ name: "Art Test", score: 9, possible: 10, completed: true },
			{ name: "Economics Quiz", score: 0, possible: 20, completed: false },
			{ name: "Theatre Lab", score: 7, possible: 15, completed: true },
			{
				name: "Psychology Assessment",
				score: 5,
				possible: 10,
				completed: false,
			},
			{ name: "Science Lab", score: 10, possible: 15, completed: true },
		];
		expect(findAverage(data)).toBeCloseTo(0.67391304347);
	});
	test("Test new array for correct average percentage w/ all True completed values", () => {
		let data: Assignment[] = [
			{ name: "Art Quiz", score: 10, possible: 15, completed: true },
			{ name: "Math Test", score: 0, possible: 10, completed: true },
			{ name: "History Test", score: 9, possible: 10, completed: true },
			{ name: "Social Studies Quiz", score: 13, possible: 20, completed: true },
			{ name: "Chemistry Lab", score: 8, possible: 10, completed: true },
		];
		expect(findAverage(data)).toBeCloseTo(0.61538461538);
	});
	test("Test new array for correct average percentage w/ all False completed values", () => {
		let data: Assignment[] = [
			{ name: "Biology Quiz", score: 10, possible: 15, completed: false },
			{ name: "Physics Lab", score: 0, possible: 10, completed: false },
			{ name: "Biology Test", score: 9, possible: 10, completed: false },
			{ name: "Phys Ed Assessment", score: 13, possible: 20, completed: false },
			{ name: "Physics Test", score: 8, possible: 10, completed: false },
		];
		expect(findAverage(data)).toBe(0);
	});
	test("Test empty array for correct return of 0", () => {
		let data: Assignment[] = [];
		expect(findAverage(data)).toBe(0);
	});
});
