'use client';

import React, { useState } from 'react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;
        setIsLoading(true);
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (res.ok) {
                setIsSubmitted(true);
                setEmail('');
            } else {
                const data = await res.json();
                alert(data?.error || 'Unable to join waitlist, please try again later.');
            }
        } catch (err) {
            console.error(err);
            alert('Network error, please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-yellow-50 to-green-100">
            {/* Header */}
            <header className="px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">🎁</span>
                    </div>
                    <span className="font-semibold text-gray-800">Jubilee</span>
                </div>
                <a
                    href="mailto:jubilee@myjubilee.co.za"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg text-sm font-semibold hover:from-purple-700 hover:to-pink-700 hover:shadow-xl transition-all transform hover:scale-105"
                >
                    🎉 Join Waitlist
                </a>
            </header>

            {/* Hero Section */}
            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Never forget a
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            {' '}
                            gift{' '}
                        </span>
                        again
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Plan, share, and track gifts for all your friends and family. Get reminders
                        for birthdays, anniversaries, and special occasions.
                    </p>
                </div>

                {/* App Preview Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Upcoming Gifts Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800">Upcoming</h3>
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-purple-600 text-xs">🔔</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 text-white">
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                                    <span className="font-medium">Shelly&apos;s Birthday</span>
                                </div>
                                <p className="text-sm opacity-90">24th April 02:30pm</p>
                                <button className="mt-2 text-xs bg-white/20 px-3 py-1 rounded-full">
                                    Check planned gifts →
                                </button>
                            </div>
                            <div className="bg-gray-800 rounded-2xl p-4 text-white">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="text-sm">❤️ Anniversary</span>
                                </div>
                                <p className="text-sm opacity-90">28th May 05:30pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Gift Planning Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800">Susan&apos;s Birthday</h3>
                            <span className="text-2xl">🎂</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Planned Gifts</p>
                        <div className="space-y-3">
                            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🎹</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">Piano kit</h4>
                                        <p className="text-xs text-white/80">
                                            Perfect for music lovers
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">💻</span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-white">Laptop</h4>
                                        <p className="text-xs text-white/80">
                                            For work and creativity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Friends Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800">Your Plans for</h3>
                            <span className="text-sm text-gray-500">👥</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Friends</h2>
                        <div className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-4 mb-4">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-white font-medium">🎂 Susan&apos;s Birthday</span>
                            </div>
                            <button className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                                Check planned gifts →
                            </button>
                        </div>
                        <div className="flex -space-x-2 mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"
                                ></div>
                            ))}
                        </div>
                        <button className="w-full py-2 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 text-sm hover:border-gray-400 transition-colors">
                            Add a friend
                        </button>
                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📅</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Smart Reminders</h3>
                        <p className="text-gray-600">
                            Never miss important dates with intelligent notifications
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🎁</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Gift Planning</h3>
                        <p className="text-gray-600">
                            Plan and organize perfect gifts for everyone you care about
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">👥</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Share & Collaborate</h3>
                        <p className="text-gray-600">
                            Coordinate with friends and family for group gifts
                        </p>
                    </div>
                </div>

                {/* Waitlist Signup */}
                <div className="max-w-md mx-auto text-center">
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        {!isSubmitted ? (
                            <>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Join the Waitlist
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Be the first to know when Jubilee launches!
                                </p>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Sending...' : 'Join Waitlist'}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✅</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    You&apos;re on the list!
                                </h2>
                                <p className="text-gray-600">
                                    We&apos;ll notify you as soon as Jubilee is ready.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center py-8 text-gray-500 text-sm">
                <p>© 2024 Jubilee. Making gift-giving memorable.</p>
                <p className="mt-2">
                    Contact us:{' '}
                    <a
                        href="mailto:jubilee@myjubilee.co.za"
                        className="text-purple-600 hover:text-purple-800"
                    >
                        jubilee@myjubilee.co.za
                    </a>
                </p>
            </footer>
        </div>
    );
}
