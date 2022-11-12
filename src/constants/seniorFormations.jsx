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
} = SENIORS;

export const SENIOR_FORMATIONS = [
	{
		order: "one",
		name: "Прва Формација",
		lines: [
			[no13, no14, no15, no16, no17, no18, no19, no20],
			[no6, no7, no8, no9, no10, no11, no12],
			[no2, no3, no4, no5],
			[no1],
		],
	},

	{
		order: "two",
		name: "Втора Формација",
		lines: [
			[no12, no14, no15, no18, no19, no20],
			[no6, no7, no16, no17, no11, no12],
			[no2, no8, no9, no10, no5],
			[no3, no1, no4],
		],
	},

	{
		order: "three",
		name: "Трета Формација",
		lines: [
			[no13, no14, no15, no2, no8, no9, no10, no5, no18, no19],
			[no6, no7, no16, no3, no1, no4, no17, no11, no12, no20],
		],
	},

	{
		order: "four",
		name: "Четврта Формација",
		lines: [
			[no13, no2, no5, no19],
			[no14, no18],
			[no8, no9, no10],
			[no15, no11],
			[no3, no1, no4],
			[no6, no12],
			[no7, no16, no17, no20],
		],
	},

	{
		order: "five",
		name: "Петта Формација",
		lines: [
			[no13, no2, no8, no10, no5, no19],
			[no14, no3, no9, no4, no18],
			[no15, no6, no12, no11],
			[no7, no1, no20],
			[no16, no17],
		],
	},

	{
		order: "six",
		name: "Шеста Формација",
		lines: [
			[no9],
			[no2, no5],
			[no8, no1, no10],
			[no13, no14, no18, no19],
			[no7, no3, no6, no4, no20],
			[no16, no15, no11, no17],
			[no12],
		],
	},
];
