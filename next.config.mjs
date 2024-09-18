import { withSentryConfig } from '@sentry/nextjs';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Add any other Next.js configuration options here
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    }
};

const sentryOptions = {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "fanshawe-college",
    project: "javascript-nextjs",
    sentryUrl: "https://sentry.io/",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Automatically annotate React components to show their full name in breadcrumbs and session replay
    reactComponentAnnotation: {
        enabled: true,
    },

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    automaticVercelMonitors: true,
};

const bundleAnalyzerOptions = {
    enabled: process.env.ANALYZE === 'true',
};

// Wrap the nextConfig with both the Sentry and Bundle Analyzer configurations
export default withSentryConfig(
    withBundleAnalyzer(bundleAnalyzerOptions)(nextConfig),
    sentryOptions
);
