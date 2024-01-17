export type HabitPlan = {
	id: string;
	activity: string;
	times: number;
	period: HabitPlanPeriod;
	startFrom: Date;
};

export type HabitPlanPeriod = {
	count: number;
	unit: PeriodUnit;
};

export type PeriodUnit = 'Week' | 'Month';
