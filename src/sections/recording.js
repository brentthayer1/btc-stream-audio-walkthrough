import recordEnable from '../img/recording/record-enable.png';
import stop from '../img/recording/stop.png';
import record from '../img/recording/record.png';

export const recording = {
	name: 'Recording',
	description: 'These steps will guide through recording',
	img: false,
	process: [
		{
			name: 'Recording Service',
			description: 'Steps to record service',
			img: false,
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
					img: stop,
				},
				{
					name: 'Record',
					description: 'Press record button.  Circle will be red.',
					img: record,
				},
				{
					name: 'Stop 2',
					description:
						'Press space bar or the stop button to finish recording.',
					img: stop,
				},
			],
		},
	],
};
