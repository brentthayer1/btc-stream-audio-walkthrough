import chain from '../img/vocal-processing/chain.png';
import ns from '../img/vocal-processing/ns.png';
import subEQ from '../img/vocal-processing/sub-eq.png';
import sibilance from '../img/vocal-processing/sibilance.png';
import tune from '../img/vocal-processing/tune.png';
import sslEQ from '../img/vocal-processing/ssl-eq.png';
import cla2A from '../img/vocal-processing/cla-2a.png';
import cla76 from '../img/vocal-processing/cla-76.png';
import tube from '../img/vocal-processing/tube.png';
import leadBackground from '../img/vocal-processing/lead-background.png';
import utility from '../img/vocal-processing/utility.png';

export const vocalProcessing = {
	name: 'Vocal Processing',
	description: 'Each vocal channel is comprised of the same processing chain.',
	img: false,
	process: [
		{
			name: 'Chain',
			description: 'Desc',
			img: chain,
			steps: [
				{
					name: 'NS',
					description:
						'Gate threshold level.  This is controlled by the NS knob on the control surface.  This needs to be continually adjusted, allowing the vocal signal to come through, but cutting out the majority of bleed.',
					img: ns,
				},
				{
					name: 'EQ - Subtractive',
					description: 'The first equalizer should be used to cut frequencies.',
					img: subEQ,
				},
				{
					name: 'Sibilance 1',
					description: 'DeEsser',
					img: sibilance,
				},
				{
					name: 'TUNE',
					description:
						'Bypass is mapped to TUNE button on control surface.  Key is mapped to KEY knob on control surface.  Ensure vocal tuning is turned OFF when vocal is talking.',
					img: tune,
				},
				{
					name: 'SSL EQ - Additive',
					description:
						'The second equalizer should be used to add frequencies to help the vocal cut through the mix.  Focus on high-mids and highs.  There is a secondary high pass filter here as well.  Keep the high pass around 200-300 depending on the vocal.',
					img: sslEQ,
				},
				{
					name: 'CLA-2A',
					description:
						'This is a slower compressor.  It should be hitting around -7 to -10 dB gain reduction.  Adjust as needed.  (Keep in mind, these adjustments will affect the next compressor.)',
					img: cla2A,
				},
				{
					name: 'CLA-76',
					description:
						'This is a faster compressor.  It should be hitting around -7 to -10 dB gain reduction. ',
					img: cla76,
				},
				{
					name: 'Sibilance 2',
					description: 'Secondary de-esser.',
					img: sibilance,
				},
				{
					name: 'Tube',
					description: 'Adds a bit of warmth and saturation.',
					img: tube,
				},
				{
					name: 'Lead / Background',
					description:
						"These two plugins are toggled on and off with the 'S' button for each vocal channel on the control surface.  When these are on, it will send the vocal channel into the back of the mix.  Adjust the output levels on these as needed to further mix the background vocals.",
					img: leadBackground,
				},
				{
					name: 'Utility',
					description:
						'This is controlled by the fader for each vocal channel.  In general, keep this at 0 dB.  Can be raised to account for talking etc.  The fader goes -10 dB to 10 dB.  If the vocal sitting at 0 dB is not right, check the level of the input coming in.',
					img: utility,
				},
			],
		},
		{
			name: 'Sends',
			description: 'Desc',
			img: false,
			steps: [
				{
					name: 'Send A, B, F',
					description:
						"These send levels are controlled by the 'S' button corresponding with each vocal channel.  Do not adjust these.",
					img: false,
				},
			],
		},
	],
};
