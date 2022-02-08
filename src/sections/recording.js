import recordEnable from '../img/record-enable.png';

export const recording = {
	id: 1,
	name: 'Recording',
	description: 'These steps will guide through recording',
	process: [
		{
			id: 1,
			name: 'Recording Service',
			description: 'Steps to record service',
			steps: [
				{
					id: 'a',
					name: 'Record Enable',
					description: 'Record enable all INPUT tracks.  Circle should be red',
					img: recordEnable,
				},
				{
					id: 'b',
					name: 'Stop',
					description:
						'Ensure timeline is at 0 seconds by pressing the stop button',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Record',
					description: 'Press record button.  Circle will be red.',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Stop',
					description:
						'Press space bar or the stop button to finish recording.',
					img: 'img',
				},
			],
		},
	],
};
