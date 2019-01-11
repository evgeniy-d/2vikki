<?php
namespace Oakma\Twovikki\Block;

use Magento\Framework\DataObject\IdentityInterface;
use Magento\Framework\View\Element\Template;

/**
 * Contact form block
 *
 * @api
 * @since 1.0.1
 */
class ContactForm extends Template implements IdentityInterface
{
	/**
	 * Cache identities
	 *
	 * @var array
	 */
	protected $identities = [];

	/**
	 * Add identity
	 *
	 * @param string|array $identity
	 * @return void
	 */
	public function addIdentity($identity)
	{
		if (!in_array($identity, $this->identities)) {
			$this->identities[] = $identity;
		}
	}

	/**
	 * Get identities
	 *
	 * @return array
	 */
	public function getIdentities()
	{
		return $this->identities;
	}
}
