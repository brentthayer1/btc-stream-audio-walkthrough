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
	process: [
		{
			name: 'Chain',
			description: 'Desc',
			img: chain,
			steps: [
				{
					name: 'NS',
					description: 'Desc',
					img: ns,
				},
				{
					name: 'Subtractive EQ',
					description: 'Desc',
					img: subEQ,
				},
				{
					name: 'Sibilance 1',
					description: 'Desc',
					img: sibilance,
				},
				{
					name: 'TUNE',
					description: 'Desc',
					img: tune,
				},
				{
					name: 'SSL EQ',
					description: 'Desc',
					img: sslEQ,
				},
				{
					name: 'CLA-2A',
					description: 'Desc',
					img: cla2A,
				},
				{
					name: 'CLA-76',
					description: 'Desc',
					img: cla76,
				},
				{
					name: 'Sibilance 2',
					description: 'Desc',
					img: sibilance,
				},
				{
					name: 'Tube',
					description: 'Desc',
					img: tube,
				},
				{
					name: 'Lead / Background',
					description: 'Desc',
					img: leadBackground,
				},
				{
					name: 'Utility',
					description: 'Desc',
					img: utility,
				},
			],
		},
	],
};
