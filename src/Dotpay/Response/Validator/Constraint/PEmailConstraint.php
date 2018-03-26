<?php

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

declare(strict_types=1);

namespace  Dotpay\Response\Validator\Constraint;

use Dotpay\Response\Validator\PEmailValidator;
use Symfony\Component\Validator\Constraints\Email;

/**
 * Constraint against 'pEmail' parameter.
 *
 * @see ResponseBag::$pEmail Parameter 'pEmail'
 * @Annotation
 * @Target({"PROPERTY"})
 */
class PEmailConstraint extends Email
{
    /** @var string Constraint message */
    public $message = 'The value {{ pEmail }} is not a valid \'pEmail\' parameter';

    /**
     * {@inheritdoc}
     */
    public function validatedBy()
    {
        return PEmailValidator::class;
    }
}
