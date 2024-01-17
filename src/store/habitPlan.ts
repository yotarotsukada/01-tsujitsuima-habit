import type { HabitPlan } from '../types/habitPlan';

const plans = Array.from<HabitPlan>([
	{
		id: Math.random().toString(),
		activity: 'do push-ups',
		times: 80,
		period: { count: 1, unit: 'Week' },
		startFrom: new Date()
	},
	{
		id: Math.random().toString(),
		activity: 'read books',
		times: 3,
		period: { count: 1, unit: 'Month' },
		startFrom: new Date()
	}
]);

export const getAllHabitPlans = () => plans;

export const createHabitPlan = (input: Omit<HabitPlan, 'id'>) => {
	const id = Math.random().toString();
	const newPlan: HabitPlan = {
		...input,
		id
	};
	plans.push(newPlan);
	return newPlan;
};

export const getHabitPlanById = (id: string) => {
	return plans.find((p) => p.id === id);
};
