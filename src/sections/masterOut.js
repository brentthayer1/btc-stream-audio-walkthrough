import masterChannel from '../img/master-out/master-channel.png';
import chain from '../img/master-out/chain.png';
import f6 from '../img/master-out/f6.png';
import ssl from '../img/master-out/ssl.png';
import l2 from '../img/master-out/l2.png';

export const masterOut = {
	name: 'Master Out',
	description: 'This is the final step before audio heads to the encoder',
	img: masterChannel,
	process: [
		{
			name: 'Chain',
			description: '',
			img: chain,
			steps: [
				{
					name: 'F6',
					description: 'The F6 is a dynamic equalizer',
					img: f6,
				},
				{
					name: 'SSL Compressor',
					description: 'Ensure the compressor is reducing gain around 1 dB',
					img: ssl,
				},
				{
					name: 'L2 Limiter',
					description:
						'Ensure threshold is lowered until only a few peaks are being reduced and overall level is consistently around -0.2 dB',
					img: l2,
				},
			],
		},
	],
};
