export const generalSetup = {
	name: 'General Setup',
	description: 'These steps will get everything set up initially',
	process: [
		{
			name: 'Connections',
			description:
				'Please ensure the following connections are correct and working',
			steps: [
				{
					name: 'X32',
					description: 'The X32 can be turned on here',
					img: 'img',
				},
				{
					name: 'Ableton Audio Input',
					description: 'Select X32 as input source',
					img: 'img',
				},
				{
					name: 'Ableton Audio Output',
					description: 'Select Scarlet as output source',
					img: 'img',
				},
				{
					name: 'Audio Out',
					description: 'Turn Scarlet output level to max',
					img: 'img',
				},
				{
					name: 'Castr',
					description: 'Ensure Castr is receiving audio from the encoder',
					img: 'img',
				},
			],
		},
		{
			name: 'Screen',
			description: 'test desc',
			steps: [
				{
					name: 'NS',
					description: 'Open the instance of NS for each vocal channel',
					img: 'img',
				},
				{
					name: 'SSL',
					description: 'Open the SSL Compressor on the master channel',
					img: 'img',
				},
				{
					name: 'L2',
					description: 'Open the L2 limiter on the master channel',
					img: 'img',
				},
			],
		},
	],
};
