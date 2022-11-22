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
			[no8, no12, no14, no15, no19, no17],
			[no13, no16, no9, no18, no11],
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
			[no8, no12, no14, no15, no19, no17],
			[no13, no2, no16, no18, no20, no11],
			[no6, no7, no9, no10, no5],
			[no3, no21, no1, no4],
		],
	},

	{
		order: "three",
		name: "Трета Формација",
		lines: [
			[no8, no12, no14, no7, no9, no10, no5, no15, no19, no17],
			[no13, no2, no16, no6, no3, no21, no1, no4, no18, no20, no11],
		],
	},

	{
		order: "four",
		name: "Четврта Формација",
		lines: [
			[no14, no17],
			[no12, no7, no5, no19],
			[no8, no6, no9, no10, no4, no15],
			[no2, no21, no1, no18],
			[no13, no3, no11],
			[no16, no20],
		],
	},

	{
		order: "five",
		name: "Петта Формација",
		lines: [
			[no14, no12, no7, no5, no19, no17],
			[no8, no6, no9, no10, no4, no15, no18],
			[no13, no2, no21, no3, no1, no11],
			[no16, no20],
		],
	},

	{
		order: "six",
		name: "Шеста Формација",
		lines: [
			[no1, no2, no3, no4, no5, no6],
			[no7, no8, no9, no10, no11, no12, no13, no14, no15],
			[no16, no17, no18, no19, no20, no21],
		],
	},
];
