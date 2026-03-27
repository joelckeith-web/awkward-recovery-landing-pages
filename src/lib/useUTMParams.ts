"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "ar_utm_params";

export type UTMParams = Record<(typeof UTM_KEYS)[number], string>;

export function useUTMParams(): UTMParams {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const fromUrl: Partial<UTMParams> = {};
    let hasUrlParams = false;

    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) {
        fromUrl[key] = value;
        hasUrlParams = true;
      }
    }

    if (hasUrlParams) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      } catch {}
      return fillDefaults(fromUrl);
    }

    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        return fillDefaults(JSON.parse(stored));
      }
    } catch {}

    return fillDefaults({});
  }, [searchParams]);
}

function fillDefaults(partial: Partial<UTMParams>): UTMParams {
  const result = {} as UTMParams;
  for (const key of UTM_KEYS) {
    result[key] = partial[key] ?? "";
  }
  return result;
}
