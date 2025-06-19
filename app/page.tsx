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
        <div
            className="min-h-screen bg-gradient-to-br from-purple-100 via-yellow-50 to-green-100"
            data-oid="s1-tiua"
        >
            {/* Header */}
            <header className="px-6 py-4 flex justify-between items-center" data-oid="7o2h38l">
                <div className="flex items-center space-x-2" data-oid="9mf3aeu">
                    <div
                        className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                        data-oid="eao.rf6"
                    >
                        <span className="text-white font-bold text-sm" data-oid=".qjh9eh">
                            🎁
                        </span>
                    </div>
                    <span className="font-semibold text-gray-800" data-oid="..n9itw">
                        Jubilee
                    </span>
                </div>
                <button
                    className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 text-sm font-medium hover:shadow-md transition-shadow"
                    data-oid="f:hgc.w"
                >
                    Sign In
                </button>
            </header>

            {/* Hero Section */}
            <main className="max-w-6xl mx-auto px-6 py-12" data-oid="j-mcsvz">
                <div className="text-center mb-16" data-oid="3iha1x4">
                    <h1
                        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        data-oid="jklvvtd"
                    >
                        Never forget a
                        <span
                            className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                            data-oid="-xhxz:f"
                        >
                            {' '}
                            gift{' '}
                        </span>
                        again
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" data-oid="qfz9_65">
                        Plan, share, and track gifts for all your friends and family. Get reminders
                        for birthdays, anniversaries, and special occasions.
                    </p>
                </div>

                {/* App Preview Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16" data-oid="nq21wrp">
                    {/* Upcoming Gifts Card */}
                    <div
                        className="bg-white rounded-3xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform"
                        data-oid=".g_l-cn"
                    >
                        <div className="flex items-center justify-between mb-4" data-oid="k528j-n">
                            <h3 className="font-semibold text-gray-800" data-oid="vekmy23">
                                Upcoming
                            </h3>
                            <div
                                className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center"
                                data-oid="6lashfw"
                            >
                                <span className="text-purple-600 text-xs" data-oid="t_zf215">
                                    🔔
                                </span>
                            </div>
                        </div>
                        <div className="space-y-3" data-oid="h4zo_50">
                            <div
                                className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-4 text-white"
                                data-oid="y6d-7jz"
                            >
                                <div
                                    className="flex items-center space-x-2 mb-2"
                                    data-oid="f69lisf"
                                >
                                    <div
                                        className="w-6 h-6 bg-white/20 rounded-full"
                                        data-oid="v4kc_xz"
                                    ></div>
                                    <span className="font-medium" data-oid="l_qwibk">
                                        Shelly's Birthday
                                    </span>
                                </div>
                                <p className="text-sm opacity-90" data-oid="-wqyc-c">
                                    24th April 02:30pm
                                </p>
                                <button
                                    className="mt-2 text-xs bg-white/20 px-3 py-1 rounded-full"
                                    data-oid="6:tvp31"
                                >
                                    Check planned gifts →
                                </button>
                            </div>
                            <div
                                className="bg-gray-800 rounded-2xl p-4 text-white"
                                data-oid="v59jz13"
                            >
                                <div
                                    className="flex items-center space-x-2 mb-2"
                                    data-oid="jg7tske"
                                >
                                    <span className="text-sm" data-oid="0y3o53g">
                                        ❤️ Anniversary
                                    </span>
                                </div>
                                <p className="text-sm opacity-90" data-oid=":wruj_6">
                                    28th May 05:30pm
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gift Planning Card */}
                    <div
                        className="bg-white rounded-3xl p-6 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform"
                        data-oid="7njkf-o"
                    >
                        <div className="flex items-center justify-between mb-4" data-oid="ujnue1y">
                            <h3 className="font-semibold text-gray-800" data-oid="6f-zj-1">
                                Susan's Birthday
                            </h3>
                            <span className="text-2xl" data-oid="jxz8jd0">
                                🎂
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4" data-oid="252yss1">
                            Planned Gifts
                        </p>
                        <div className="space-y-3" data-oid="wvyh9rd">
                            <div
                                className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-4"
                                data-oid="mxejxp1"
                            >
                                <div className="flex items-center space-x-3" data-oid="_iugnii">
                                    <div
                                        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                                        data-oid="x6uox:4"
                                    >
                                        <span className="text-2xl" data-oid="rium:na">
                                            🎹
                                        </span>
                                    </div>
                                    <div data-oid="z8e1_8y">
                                        <h4 className="font-medium text-white" data-oid="hoy3hm1">
                                            Piano kit
                                        </h4>
                                        <p className="text-xs text-white/80" data-oid="l.q6mzv">
                                            Perfect for music lovers
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4"
                                data-oid="a5_lo6l"
                            >
                                <div className="flex items-center space-x-3" data-oid="n:sgsf_">
                                    <div
                                        className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"
                                        data-oid="jpul119"
                                    >
                                        <span className="text-2xl" data-oid="vbl59xe">
                                            💻
                                        </span>
                                    </div>
                                    <div data-oid="u__nby5">
                                        <h4 className="font-medium text-white" data-oid="jx.dq7q">
                                            Laptop
                                        </h4>
                                        <p className="text-xs text-white/80" data-oid="vm_-kk5">
                                            For work and creativity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Friends Card */}
                    <div
                        className="bg-white rounded-3xl p-6 shadow-lg transform rotate-1 hover:rotate-0 transition-transform"
                        data-oid="m7oepop"
                    >
                        <div className="flex items-center justify-between mb-4" data-oid="wcbcmfy">
                            <h3 className="font-semibold text-gray-800" data-oid="vi59_12">
                                Your Plans for
                            </h3>
                            <span className="text-sm text-gray-500" data-oid="46-h4e3">
                                👥
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4" data-oid="jgtbs2a">
                            Friends
                        </h2>
                        <div
                            className="bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-4 mb-4"
                            data-oid="sm:es6i"
                        >
                            <div className="flex items-center space-x-2 mb-2" data-oid="a7atr.7">
                                <span className="text-white font-medium" data-oid="u1tt_ad">
                                    🎂 Susan's Birthday
                                </span>
                            </div>
                            <button
                                className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                                data-oid="izqsp_."
                            >
                                Check planned gifts →
                            </button>
                        </div>
                        <div className="flex -space-x-2 mb-4" data-oid="g:owjjv">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"
                                    data-oid="4rsawvt"
                                ></div>
                            ))}
                        </div>
                        <button
                            className="w-full py-2 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 text-sm hover:border-gray-400 transition-colors"
                            data-oid="15xstr6"
                        >
                            Add a friend
                        </button>
                    </div>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-16" data-oid="-l-hh8m">
                    <div className="text-center" data-oid=":asta05">
                        <div
                            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                            data-oid="l:s5er1"
                        >
                            <span className="text-2xl" data-oid="__5a622">
                                📅
                            </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2" data-oid="z42:eo6">
                            Smart Reminders
                        </h3>
                        <p className="text-gray-600" data-oid="yj_etx4">
                            Never miss important dates with intelligent notifications
                        </p>
                    </div>
                    <div className="text-center" data-oid="buut-ul">
                        <div
                            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                            data-oid="0-3fqvq"
                        >
                            <span className="text-2xl" data-oid="stda._g">
                                🎁
                            </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2" data-oid="ysfty2t">
                            Gift Planning
                        </h3>
                        <p className="text-gray-600" data-oid="tos97.4">
                            Plan and organize perfect gifts for everyone you care about
                        </p>
                    </div>
                    <div className="text-center" data-oid="i517ojk">
                        <div
                            className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                            data-oid="_kf3rjh"
                        >
                            <span className="text-2xl" data-oid="e8egpeg">
                                👥
                            </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2" data-oid="fdevjas">
                            Share & Collaborate
                        </h3>
                        <p className="text-gray-600" data-oid="4e:8qyp">
                            Coordinate with friends and family for group gifts
                        </p>
                    </div>
                </div>

                {/* Waitlist Signup */}
                <div className="max-w-md mx-auto text-center" data-oid="v8v561s">
                    <div className="bg-white rounded-3xl p-8 shadow-xl" data-oid="9ln6nov">
                        {!isSubmitted ? (
                            <>
                                <h2
                                    className="text-2xl font-bold text-gray-900 mb-4"
                                    data-oid="mji622n"
                                >
                                    Join the Waitlist
                                </h2>
                                <p className="text-gray-600 mb-6" data-oid="nvkf5n1">
                                    Be the first to know when Jubilee launches!
                                </p>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                    data-oid="r_e-v2e"
                                >
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        required
                                        data-oid="9txw5m-"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                                        data-oid="c9.3b7y"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Sending...' : 'Join Waitlist'}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center" data-oid="kk_-3x1">
                                <div
                                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                    data-oid="_ykbr4_"
                                >
                                    <span className="text-2xl" data-oid="wgf.pvb">
                                        ✅
                                    </span>
                                </div>
                                <h2
                                    className="text-2xl font-bold text-gray-900 mb-2"
                                    data-oid="2y-473p"
                                >
                                    You're on the list!
                                </h2>
                                <p className="text-gray-600" data-oid="uz9.tjl">
                                    We'll notify you as soon as Jubilee is ready.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center py-8 text-gray-500 text-sm" data-oid="zfgo-p9">
                <p data-oid="x3_vco5">© 2024 Jubilee. Making gift-giving memorable.</p>
                <p className="mt-2" data-oid="3se3nm2">
                    Contact us:{' '}
                    <a
                        href="mailto:jubilee@myjubilee.co.za"
                        className="text-purple-600 hover:text-purple-800"
                        data-oid="cr01now"
                    >
                        jubilee@myjubilee.co.za
                    </a>
                </p>
            </footer>
        </div>
    );
}
