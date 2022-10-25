enum ERRORS {
  STACK_OVERFLOW = "stack overflow",
  STACK_UNDERFLOW = "stack underflow",
  STACK_VALUE_TOO_BIG = "stack value too big",
  STACK_VALUE_TOO_SMALL = "stack value too small",
  INVALID_OPCODE = "invalid opcode",
  PC_OUT_OF_BOUNDS = "pc out of bounds",
  JUMP_OUT_OF_BOUNDS = "jump out of bounds",
  JUMP_TO_INVALID_DESTINATION = "jump to invalid destination",
  INVALID_MEMORY_OFFSET = "invalid memory offset",
  INVALID_MEMORY_VALUE_SIZE = "invalid memory value size",

  STOP = "STOP",
  REVERT = "REVERT",
}

export default ERRORS
