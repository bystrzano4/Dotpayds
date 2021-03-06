<?php

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

declare(strict_types=1);

/*
 * This file is part of Dotpayds project.
 * (c) Krzysztof Piasecki <krzysiekpiasecki@gmail.com>
 *
 * @license   https://opensource.org/licenses/MIT  The MIT License
 */

namespace Dotpay\Environment;

/**
 * Environment.
 */
class Credentials implements CredentialsInterface
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $pin;

    /**
     * Environment.
     *
     * @param string $id
     * @param string $pin
     */
    public function __construct(string $id, string $pin)
    {
        $this->id = $id;
        $this->pin = $pin;
    }

    /**
     * @return string
     */
    public function id(): string
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function pin(): string
    {
        return $this->pin;
    }
}
