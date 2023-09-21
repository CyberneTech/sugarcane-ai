
import { z } from "zod";

export const getLogsInput = z
    .object({
        userId: z.string().optional(),
        promptPackageId: z.string(),
        promptTemplateId: z.string().optional(),
        promptVersionId: z.string().optional(),
    })
    .strict()
export type GetLogsInput = z.infer<typeof getLogsInput>;

const logSchema = z.object({
    id: z.string(),
    // inputId: z.string().optional(),
    promptPackageId: z.string(),
    promptTemplateId: z.string(),
    promptVersionId: z.string(),
    prompt: z.string(),
    completion: z.string(),
    llmProvider: z.string(),
    llmModel: z.string(),
    llmConfig: z.record(z.any()),

    latency: z.number(),
    prompt_tokens: z.number(),
    completion_tokens: z.number(),
    total_tokens: z.number(),
    // extras: z.record(z.any()),

    labelledState: z.string(),
    finetunedState: z.string(),

    // createdAt: z.string(),
    // updatedAt: z.string(),
})

export const logOutput = logSchema.or(z.null())
export type LogOutput = z.infer<typeof logOutput>;

export const logListOutput = z.array(logSchema)
export type LogListOutput = z.infer<typeof logListOutput>;


// const dd = {
//     "id": "clmq7ranr0001sgpp3l6qou92",
//     "userId": "clmpdlyre0000sgj58t3yilf8", 
//     "log": "0.0.1", 
//     "template": "\nYou a bot name {#BOT_NAME} trained by {#PROVIDER}\nYou act as {@C_ROLE}, {@C_DESCRIPTION}\n", 
    
//     "inputFields": [], 
//     "templateFields": [], 
//     "changelog": "TTD", 
//     "llmProvider": "openai", 
//     "llmModel": "gpt-3.5-turbo", 
//     "llmConfig": {}, 
//     "lang": [], 
//     "outAccuracy": null, 
//     "outLatency": null, 
//     "outCost": null, 
//     "promptPackageId": 
//     "clmpdm6jm0006sgj59s49k8nv", 
//     "promptTemplateId": "clmpzzla20003sg6fku7k5qtv"
// }