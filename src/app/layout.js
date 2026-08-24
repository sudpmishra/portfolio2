import Script from "next/script";
import "./globals.css";
import "./App.css";

const siteUrl = "https://sudeepmishra.info.np";
const title =
  "Sudeep Mishra | Senior Full-Stack Software Engineer & Technical Consultant";
const description =
  "Sudeep Mishra is a senior full-stack engineer specializing in Next.js, React, and TypeScript — building server-first web architecture (App Router, SSR/SSG/ISR), performant UIs, and scalable API layers.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Sudeep Mishra",
  },
  description,
  keywords: [
    "Sudeep Mishra",
    "Senior Full-Stack Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Engineer",
    "App Router",
    "Server Components",
    "Web Performance Engineer",
    "Technical Consultant",
  ],
  authors: [{ name: "Sudeep Mishra", url: siteUrl }],
  creator: "Sudeep Mishra",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sudeep Mishra",
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: "/image.jpg",
        width: 1200,
        height: 630,
        alt: "Sudeep Mishra — Senior Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/image.jpg"],
    creator: "@sudpmishra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sudeep Mishra",
  jobTitle: "Senior Full-Stack Software Engineer & Technical Consultant",
  url: siteUrl,
  image: `${siteUrl}/image.jpg`,
  email: "mailto:sudeep014@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  sameAs: [
    "https://github.com/sudpmishra",
    "https://linkedin.com/in/sudeep014",
    "https://twitter.com/sudpmishra",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Server-Side Rendering",
    "Web Performance",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(personJsonLd)}
        </Script>
        {children}
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !(function (t, e) {
                var o, n, p, r;
                e.__SV ||
                    ((window.posthog = e),
                        (e._i = []),
                        (e.init = function (i, s, a) {
                            function g(t, e) {
                                var o = e.split(".");
                                2 == o.length && ((t = t[o[0]]), (e = o[1])),
                                    (t[e] = function () {
                                        t.push(
                                            [e].concat(
                                                Array.prototype.slice.call(
                                                    arguments,
                                                    0,
                                                ),
                                            ),
                                        );
                                    });
                            }
                            ((p = t.createElement("script")).type =
                                "text/javascript"),
                                (p.crossOrigin = "anonymous"),
                                (p.async = !0),
                                (p.src =
                                    s.api_host.replace(
                                        ".i.posthog.com",
                                        "-assets.i.posthog.com",
                                    ) + "/static/array.js"),
                                (r =
                                    t.getElementsByTagName(
                                        "script",
                                    )[0]).parentNode.insertBefore(p, r);
                            var u = e;
                            for (
                                void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
                                u.people = u.people || [],
                                u.toString = function (t) {
                                    var e = "posthog";
                                    return (
                                        "posthog" !== a && (e += "." + a),
                                        t || (e += " (stub)"),
                                        e
                                    );
                                },
                                u.people.toString = function () {
                                    return u.toString(1) + ".people (stub)";
                                },
                                o =
                                "init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(
                                    " ",
                                ),
                                n = 0;
                                n < o.length;
                                n++
                            )
                                g(u, o[n]);
                            e._i.push([i, s, a]);
                        }),
                        (e.__SV = 1));
            })(document, window.posthog || []);
            posthog.init("phc_xAvL2Iq4tFmANRE7kzbKwaSqp1HJjN7x48s3vr0CMjs", {
                api_host: "https://us.i.posthog.com",
                person_profiles: "identified_only",
                session_recording: {
                    recordCrossOriginIframes: true,
                },
            });
          `}
        </Script>
      </body>
    </html>
  );
}
