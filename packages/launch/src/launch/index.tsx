/**
 * External dependencies
 */
import * as React from 'react';
import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';
import { Icon, wordpress } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import FocusedLaunch from '../focused-launch';
import LaunchContext from '../context';
import './styles.scss';

interface Props {
	onClose: () => void;
	siteId: number;
	locale: string;
}

const FocusedLaunchModal: React.FunctionComponent< Props > = ( { onClose, siteId, locale } ) => {
	return (
		<Modal
			open={ true }
			className="launch__focused-modal"
			overlayClassName="launch__focused-modal-overlay"
			bodyOpenClassName="has-focused-launch-modal"
			onRequestClose={ onClose }
			title={ __( 'Complete setup', __i18n_text_domain__ ) }
			icon={ <Icon icon={ wordpress } size={ 36 } /> }
		>
			<div className="launch__focused-modal-wrapper ">
				<div className="launch__focused-modal-body">
					<LaunchContext.Provider value={ { siteId, locale } }>
						<FocusedLaunch />
					</LaunchContext.Provider>
				</div>
			</div>
		</Modal>
	);
};

export default FocusedLaunchModal;
