<?php

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

namespace  KrzysiekPiasecki\Dotpay\Validation\Request\Constraint;

use KrzysiekPiasecki\Dotpay\Validation\Request\StateValidator;
use Symfony\Component\Validator\Constraint;

/**
 * Constraint against 'state' parameter.
 *
 * @see RequestBag::$state Parameter 'state'
 * @Annotation
 * @Target({"PROPERTY"})
 */
class StateConstraint extends Constraint
{
    /** @var string Constraint message */
    public $message = 'The value {{ state }} is not a valid \'state\' parameter';

    /**
     * {@inheritdoc}
     */
    public function validatedBy()
    {
        return StateValidator::class;
    }
}