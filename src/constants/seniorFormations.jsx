import { SENIORS } from "./seniors";

const {
	no1,
	no2,
	no3,
	no4,
	no5,
	no6,
	no7,
	no8,
	no9,
	no10,
	no11,
	no12,
	no13,
	no14,
	no15,
	no16,
	no17,
	no18,
	no19,
	no20,
	no21,
} = SENIORS;

export const SENIOR_FORMATIONS = [
	{
		order: "one",
		name: "Прва Формација",
		lines: [
			[no8, no14, no15, no19],
			[no13, no9, no18, no11],
			[no2, no7, no10, no20],
			[no6, no21, no5],
			[no3, no4],
			[no1],
		],
	},

	{
		order: "two",
		name: "Втора Формација",
		lines: [
			[no8, no14, no15, no19],
			[no13, no2, no18, no20, no11],
			[no6, no7, no9, no10, no5],
			[no3, no21, no1, no4],
		],
	},

	{
		order: "three",
		name: "Трета Формација",
		lines: [
			[no8, no13, no14, no7, no18, no9, no10, no15, no19],
			[no2, no6, no3, no21, no1, no4, no5, no20, no11],
		],
	},

	{
		order: "four",
		name: "Четврта Формација",
		lines: [
			[no14, no7, no10, no19],
			[no13, no18, no9, no15],
			[no8, no11],
			[no2, no21, no1, no5],
			[no6, no3, no4, no20],
		],
	},

	{
		order: "five",
		name: "Петта Формација",
		lines: [
			[no14, no10],
			[no2, no13, no7, no18, no9, no15, no19],
			[no6, no8, no21, no1, no11, no5],
			[no3, no4, no20],
		],
	},

	{
		order: "six",
		name: "Шеста Формација",
		lines: [
			[no2, no7, no19],
			[no8, no13, no21, no3, no6, no1, no4, no10, no11],
			[no14, no9, no5, no20, no15, no18],
		],
	},
];
