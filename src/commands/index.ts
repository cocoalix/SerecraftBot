/** Intermediate module file for exporting all commands
 * Makes importing several commands simpler
 * 
 * before: 
 * import { EchoCommand } from "./commands/echoCommand";
 * import { NextCommand } from "./commands/nextCommand";
 * 
 * now:
 * import { EchoCommand, NextCommand } from "./commands";
 * 
 * DO NOT export command classes using default
 */

export * from "./greetCommand";
export * from "./timeCommand";
export * from "./echoCommand";
export * from "./hageCommand";
export * from "./listCommand";
export * from "./githubCommand";
export * from "./azure/bootCommand";
export * from "./azure/rebootCommand";
export * from "./azure/haltCommand";
export * from "./azure/statusCommand";
export * from "./azure/extraOperationCommand";

export * from "./dev/pushCommand";
export * from "./dev/popCommand";
