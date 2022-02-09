import recordEnable from '../img/record-enable.png';

export const recording = {
	name: 'Recording',
	description: 'These steps will guide through recording',
	process: [
		{
			name: 'Recording Service',
			description: 'Steps to record service',
			steps: [
				{
					name: 'Record Enable',
					description: 'Record enable all INPUT tracks.  Circle should be red',
					img: recordEnable,
				},
				{
					name: 'Stop 1',
					description:
						'Ensure timeline is at 0 seconds by pressing the stop button',
					img: 'img',
				},
				{
					name: 'Record',
					description: 'Press record button.  Circle will be red.',
					img: 'img',
				},
				{
					name: 'Stop 2',
					description:
						'Press space bar or the stop button to finish recording.',
					img: 'img',
				},
			],
		},
	],
};
