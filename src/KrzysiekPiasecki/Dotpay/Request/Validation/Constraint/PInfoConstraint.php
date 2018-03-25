<?php

declare(strict_types=1);

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

namespace  KrzysiekPiasecki\Dotpay\Request\Validation\Constraint;

use KrzysiekPiasecki\Dotpay\Request\Validation\PInfoValidator;
use Symfony\Component\Validator\Constraint;

/**
 * Constraint against 'pInfo' parameter.
 *
 * @see RequestBag::$pInfo Parameter 'pInfo'
 * @Annotation
 * @Target({"PROPERTY"})
 */
class PInfoConstraint extends Constraint
{
    /** @var string Constraint message */
    public $message = 'The value {{ pInfo }} is not a valid \'pInfo\' parameter';

    /**
     * {@inheritdoc}
     */
    public function validatedBy()
    {
        return PInfoValidator::class;
    }
}
