"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, ChevronDown } from "lucide-react";
import { FAQ } from "@/types";

interface FaqProps {
    faqs: FAQ[];
}

export default function Faq({ faqs }: FaqProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111112] rounded-[12px] w-full"
        >
            <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 p-6 md:p-12 lg:p-[103.5px] py-8 md:py-16 lg:py-[121px]">
                {/* FAQ Section */}
                <div className="flex flex-col gap-4 w-full lg:w-[586px] lg:max-w-[50%]">
                    <div>
                        <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-[48px] text-white tracking-[-0.96px] mb-2">
                            Frequently Asked
                        </h2>
                        <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-[48px] text-white tracking-[-0.96px]">
                            Questions
                        </h2>
                    </div>
                    <p className="font-normal leading-[1.6] text-sm md:text-base text-neutral-500 mb-4">
                        Find answers to common questions about our solutions
                    </p>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        {faqs.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id.toString()}
                                className="border-b border-[rgba(255,255,255,0.08)]"
                            >
                                <AccordionTrigger className="hover:bg-[rgba(255,255,255,0.02)] rounded-[8px] py-4 md:py-5 px-0 text-sm md:text-base font-medium text-white text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                                    <span className="pr-4">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-sm md:text-[15px] text-neutral-400 pt-2 pb-4 leading-[1.6]">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:flex-1"
                >
                    <Card className="bg-[#0a0a0b] border border-[rgba(255,255,255,0.08)] rounded-[16px]">
                        <CardContent className="flex flex-col gap-6 md:gap-8 p-6 md:p-8 lg:p-[49px]">
                            <h3 className="font-bold leading-tight text-2xl md:text-3xl lg:text-[32px] text-white tracking-[-0.64px]">
                                Haven't found the right help?
                            </h3>
                            <div className="flex flex-col gap-5 w-full">
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-[8px] h-[56.5px] px-[20px] text-[15px] text-white placeholder:text-[rgba(255,255,255,0.5)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[rgba(255,255,255,0.2)]"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-[8px] h-[56.5px] px-[20px] text-[15px] text-white placeholder:text-[rgba(255,255,255,0.5)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[rgba(255,255,255,0.2)]"
                                />
                                <Input
                                    type="text"
                                    placeholder="Subject"
                                    className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-[8px] h-[56.5px] px-[20px] text-[15px] text-white placeholder:text-[rgba(255,255,255,0.5)] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[rgba(255,255,255,0.2)]"
                                />
                                <Textarea
                                    placeholder="Enter your message here"
                                    className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-[8px] px-[20px] py-[16px] text-[15px] text-white placeholder:text-[rgba(255,255,255,0.5)] min-h-[150px] leading-[22.5px] resize-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[rgba(255,255,255,0.2)]"
                                />
                                <Button
                                    className="bg-neutral-50 hover:bg-white text-[#0a0a0b] rounded-[8px] w-full py-[15px] px-[32px] font-semibold text-[15px] transition-all duration-300"
                                    asChild
                                >
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Send className="mr-2 h-4 w-4" />
                                        Submit Now
                                    </motion.button>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}
