import { JUNIORS } from "./juniors";

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
	no22,
	no23,
	no24,
	no25,
	no26,
	no27,
} = JUNIORS;

export const JUNIOR_FORMATIONS = [
	{
		order: "one",
		name: "Прва Формација",
		lines: [
			[no15, no16, no17, no18, no19, no20, no21, no22, no23, no24, no25, no26, no27],
			[no1, no2, no3, no4, no5, no6, no7, no8, no9, no10, no11, no12, no13, no14],
		],
	},

	{
		order: "two",
		name: "Втора Формација",
		lines: [
			[no1, no2, no3, no4, no5, no6, no7, no8, no9, no10, no11, no12, no13, no14],
			[no15, no16, no17, no18, no19, no20, no21, no22, no23, no24, no25, no26, no27],
		],
	},

	{
		order: "three",
		name: "Трета Формација",
		lines: [
			[no1, no2, no3, no4, no5, no10, no11, no12, no13, no14],
			[no15, no16, no17, no18, no24, no25, no26, no27],
			[no6, no7, no8, no9],
			[no19, no20, no21, no22, no23],
		],
	},

	{
		order: "four",
		name: "Четврта Формација",
		lines: [
			[no1, no2, no3, no4, no5, no10, no11, no12, no13],
			[no15, no16, no17, no18, no24, no25, no26, no27, no14],
			[no19, no6, no20, no7, no21, no8, no22, no9, no23],
		],
	},

	{
		order: "five",
		name: "Петта Формација",
		lines: [
			[no19, no6, no20, no7, no21, no8, no22, no9, no23, no14],
			[no15, no16, no17, no18, no24, no25, no26, no27, no13],
			[no1, no2, no3, no4, no5, no10, no11, no12],
		],
	},

	{
		order: "six",
		name: "Шеста Формација",
		lines: [
			[no19, no6, no20, no24, no9, no23, no14],
			[no16, no17, no7, no21, no8, no22, no26, no27, no13],
			[no1, no2, no3, no4, no18, no25, no5, no10, no11, no12],
		],
	},

	{
		order: "seven",
		name: "Седма Формација",
		lines: [
			[no6, no23],
			[no19, no20, no24, no9, no14],
			[no16, no7, no8, no22, no27],
			[no17, no21, no26, no13],
			[no1, no4, no18, no5, no12],
			[no2, no3, no25, no20, no11],
		],
	},

	{
		order: "eight",
		name: "Осма Формација",
		lines: [
			[no16, no19, no20, no6, no23, no9, no14, no27],
			[no7, no17, no21, no8, no24, no26, no22, no13],
			[no18, no25],
			[no1, no2, no4, no3, no10, no5, no11, no12],
		],
	},

	{
		order: "nine",
		name: "Деветта Формација",
		lines: [
			[no16, no19, no20, no6, no23, no9, no14, no27],
			[no7, no8, no17, no21, no18, no25, no24, no26, no22, no13],
			[no1, no2, no4, no3, no10, no5, no11, no12],
		],
	},
];
