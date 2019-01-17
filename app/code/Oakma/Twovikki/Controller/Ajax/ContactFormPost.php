<?php

namespace QaisarSatti\HelloWorld\Controller\Ajax;

use Magento\Framework\Controller\ResultFactory;
use Magento\Framework\App\Action\Action;
use Magento\Framework\App\Action\Context;

class ContactFormPost extends Action
{
	protected $request;

	public function __construct(Context $context, array $data = [])
	{
		parent::__construct($context, $data);
	}

	public function execute()
	{
		$data = ['success' => 1];


		$resultJson = $this->resultFactory->create(ResultFactory::TYPE_JSON);
		$resultJson->setData($data);
		return $resultJson;

	}
}
