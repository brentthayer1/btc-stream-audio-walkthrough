export const generalSetup = {
	id: 1,
	name: 'General Setup',
	description: 'These steps will get everything set up initially',
	process: [
		{
			id: 1,
			name: 'Connections',
			description:
				'Please ensure the following connections are correct and working',
			steps: [
				{
					id: 'a',
					name: 'X32',
					description: 'The X32 can be turned on here',
					img: 'img',
				},
				{
					id: 'b',
					name: 'Ableton Audio Input',
					description: 'Select X32 as input source',
					img: 'img',
				},
				{
					id: 'c',
					name: 'Ableton Audio Output',
					description: 'Select Scarlet as output source',
					img: 'img',
				},
				{
					id: 'd',
					name: 'Audio Out',
					description: 'Turn Scarlet output level to max',
					img: 'img',
				},
				{
					id: 'e',
					name: 'Castr',
					description: 'Ensure Castr is receiving audio from the encoder',
					img: 'img',
				},
			],
		},
		{
			id: 2,
			name: 'Screen',
			description: 'test desc',
			steps: [
				{
					id: 'a',
					name: 'NS',
					description: 'Open the instance of NS for each vocal channel',
					img: 'img',
				},
				{
					id: 'b',
					name: 'SSL',
					description: 'Open the SSL Compressor on the master channel',
					img: 'img',
				},
				{
					id: 'c',
					name: 'L2',
					description: 'Open the L2 limiter on the master channel',
					img: 'img',
				},
			],
		},
	],
};
