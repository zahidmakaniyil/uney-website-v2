"use client";

import { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    // Reset form when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            // Delay the reset to prevent flash of form during close animation
            const timer = setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: "", email: "", phone: "", message: "" });
                setErrors({});
            }, 300); // Match the close animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("scroll-locked");
        } else {
            document.body.classList.remove("scroll-locked");
        }
        return () => {
            document.body.classList.remove("scroll-locked");
        };
    }, [isOpen]);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "You have to complete the required field";
        }

        if (!formData.email.trim()) {
            newErrors.email = "You have to complete the required field";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "You have to complete the required field";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsSuccess(true);
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="relative z-50 contact-modal"
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <DialogPanel
                        transition
                        className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full  ${isSuccess ? "sm:max-w-[400px]" : "sm:max-w-[640px]"
                            } data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 max-h-[90vh] overflow-y-auto scrollbar-hide`}
                    >
                        {!isSuccess ? (
                            <>
                                {/* Close Button - Only show in form state */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <X stroke="#2E3038" />
                                </button>
                            </>
                        ) : null}

                        {!isSuccess ? (
                            // Contact Form
                            <div className="p-[24px]">
                                <div className="flex flex-col gap-[4px]">
                                    <DialogTitle
                                        as="h2"
                                        className="text-heading contact-modal-title font-josefin"
                                    >
                                        Contact us
                                    </DialogTitle>
                                    <p className="text-neutral contact-modal-description">
                                        Get in touch and let us know we can help you
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-[24px] pt-[24px]"
                                >
                                    {/* Name Field */}
                                    <div className="flex flex-col gap-[8px]">
                                        <label
                                            htmlFor="name"
                                            className="text-neutral contact-modal-input-label"
                                        >
                                            Your name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-3 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.name ? "border-red-500" : "border-[#C2C5CD]"
                                                }`}
                                            placeholder="Enter your name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email and Phone Fields - Same row on desktop */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                                        {/* Email Field */}
                                        <div className="flex flex-col gap-[8px]">
                                            <label
                                                htmlFor="email"
                                                className="text-neutral contact-modal-input-label"
                                            >
                                                Your email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full px-3 py-3 border rounded-[8px] focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${errors.email ? "border-red-500" : "border-[#C2C5CD]"
                                                    }`}
                                                placeholder="Enter your email address"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm">{errors.email}</p>
                                            )}
                                        </div>

                                        {/* Phone Field */}
                                        <div className="flex flex-col gap-[8px]">
                                            <label
                                                htmlFor="phone"
                                                className="text-neutral contact-modal-input-label"
                                            >
                                                Your Phone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-3 border border-[#C2C5CD] rounded-[8px] focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="flex flex-col gap-[8px]">
                                        <label
                                            htmlFor="message"
                                            className="text-neutral contact-modal-input-label"
                                        >
                                            Message/Inquiry <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={4}
                                                maxLength={240}
                                                className={`w-full px-3 py-3 border rounded-[8px] focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${errors.message ? "border-red-500" : "border-[#C2C5CD]"
                                                    }`}
                                                placeholder="Write your message or inquiry here..."
                                            />
                                            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                                                {formData.message.length}/240
                                            </div>
                                        </div>
                                        {errors.message && (
                                            <p className="text-red-500 text-sm">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        aria-label="Submit form"
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-white py-3 px-4 rounded-[8px] font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit"}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            // Thank You Modal
                            <div className="p-[24px] text-center">
                                <div className="p-[24px] flex flex-col gap-[24px]">
                                    <div className="w-[48px] h-[48px] bg-[#059669] rounded-full flex items-center justify-center mx-auto">
                                        <Check size={32} className="text-white" />
                                    </div>
                                    <div className="flex flex-col gap-[12px]">
                                        <DialogTitle
                                            as="h2"
                                            className="text-heading contact-modal-thank-you-title font-josefin"
                                        >
                                            Thank you!
                                        </DialogTitle>
                                        <p className="text-gray-600 text-sm">
                                            Your message has been sent successfully. Our team will get
                                            back to you shortly.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    aria-label="Close modal"
                                    className="w-full bg-primary text-white h-[56px] rounded-[8px] contact-modal-thank-you-ok-button hover:bg-primary-600 transition-colors cursor-pointer"
                                >
                                    OK
                                </button>
                            </div>
                        )}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
