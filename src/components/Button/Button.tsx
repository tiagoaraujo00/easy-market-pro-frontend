import { tv, VariantProps } from "tailwind-variants";
import { ComponentProps } from "react";

const buttonVariants = tv({
  base: "rounded-xl hover:bg-zinc-800 text-xl p-4",
  variants: {
    variant: {
      primary: "text-zinc-100 bg-zinc-900",
      secondary: "text-primary_dark bg-primary_green hover:bg-primary_green",
    },
    size: {
      default: "w-full",
      middle: "w-[50%]",
      small: "p-2",
    },
    disabled: {
      true: "cursor-not-allowed opacity-60",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}
export default function Button({
  children,
  variant,
  size,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button {...props} className={buttonVariants({ variant, size })} >
      {children}
    </button>
  );
}
