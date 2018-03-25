<?php

declare(strict_types=1);

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

namespace  KrzysiekPiasecki\Dotpay\Response\Validation\Constraint;

use KrzysiekPiasecki\Dotpay\Response\Validation\emailValidator;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Email;

/**
 * Constraint against 'email' parameter.
 *
 * @see ResponseBag::$email Parameter 'email'
 * @Annotation
 * @Target({"PROPERTY"})
 */
class EmailConstraint extends Email
{
    /** @var string Constraint message */
    public $message = 'The value {{ email }} is not a valid \'email\' parameter';

    /**
     * {@inheritdoc}
     */
    public function validatedBy()
    {
        return EmailValidator::class;
    }
}
