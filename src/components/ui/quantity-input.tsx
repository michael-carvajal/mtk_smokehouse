"use client"

import * as React from "react"
import { cn } from "~/lib/utils"
import { Minus, Plus } from "lucide-react"
import { Button } from "./button"

export interface QuantityInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
}

const QuantityInput = React.forwardRef<HTMLInputElement, QuantityInputProps>(
  ({ className, value = 0, onChange, min = 0, max = Infinity, step = 1, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(value)

    React.useEffect(() => {
      setInternalValue(value)
    }, [value])

    const handleChange = (newValue: number) => {
      const clampedValue = Math.min(Math.max(newValue, min), max)
      setInternalValue(clampedValue)
      onChange?.(clampedValue)
    }

    const increment = () => handleChange(internalValue + step)
    const decrement = () => handleChange(internalValue - step)

    return (
      <div className={cn("flex items-center", className)}>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decrement}
          disabled={internalValue <= min}
          className="h-10 w-10 rounded-r-none"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <input
          type="number"
          value={internalValue}
          onChange={(e) => handleChange(Number(e.target.value))}
          className={cn(
            "flex h-10 w-20 rounded-none border border-input bg-background px-3 py-2 text-sm text-center ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}
          min={min}
          max={max}
          step={step}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={increment}
          disabled={internalValue >= max}
          className="h-10 w-10 rounded-l-none"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    )
  }
)
QuantityInput.displayName = "QuantityInput"

export { QuantityInput }