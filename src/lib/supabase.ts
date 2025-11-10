import { createClient } from "@supabase/supabase-js";

const DEV_MODE = true;

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

export async function getDailyYenAmount() {
  if (DEV_MODE) {
    return [
      { sale_date: "2025-10-20", total_yen: 1123831 },
      { sale_date: "2025-10-21", total_yen: 1290395 },
      { sale_date: "2025-10-22", total_yen: 948592 },
      { sale_date: "2025-10-23", total_yen: 1025866 },
      { sale_date: "2025-10-24", total_yen: 741710 },
      { sale_date: "2025-10-25", total_yen: 1383751 },
      { sale_date: "2025-10-26", total_yen: 1547230 },
      { sale_date: "2025-10-27", total_yen: 965507 },
      { sale_date: "2025-10-28", total_yen: 1160446 },
      { sale_date: "2025-10-29", total_yen: 847568 },
      { sale_date: "2025-10-30", total_yen: 754110 },
      { sale_date: "2025-10-31", total_yen: 1296343 },
      { sale_date: "2025-11-01", total_yen: 1916546 },
      { sale_date: "2025-11-02", total_yen: 4213188 },
      { sale_date: "2025-11-03", total_yen: 1350783 },
      { sale_date: "2025-11-04", total_yen: 1328723 },
      { sale_date: "2025-11-05", total_yen: 1484097 },
      { sale_date: "2025-11-06", total_yen: 1418393 },
      { sale_date: "2025-11-07", total_yen: 1016686 },
      { sale_date: "2025-11-08", total_yen: 4035789 },
      { sale_date: "2025-11-09", total_yen: 2239901 },
    ];
  }
  const { data, error } = await supabase.rpc("daily_yen_amount");
  if (error) {
    console.error(error);
    throw Error("failed to read daily_yen_amount");
  }
  return data;
}

export async function getChannelSuperchatSummary(channelId: string) {
  if (DEV_MODE) {
    return [
      {
        video_id: "jLqwFhMkbgg",
        video_title: "【Once Upon a Katamari】 We Be Ballin' In a New Outfit",
        video_timestamp: "2025-10-26T20:07:25.309+00:00",
        total_yen: 116502,
      },
      {
        video_id: "Ipk16R-TznI",
        video_title: "【Heavy Rain】 There's a JASON in All of Us",
        video_timestamp: "2025-10-28T19:59:53.355+00:00",
        total_yen: 62247,
      },
      {
        video_id: "F62QDBO-mxM",
        video_title: "【Heavy Rain】 FINDING MY SHAUN",
        video_timestamp: "2025-10-29T19:58:48+00:00",
        total_yen: 59629,
      },
      {
        video_id: "m73wkwQNl2I",
        video_title: "Halloween Night with HoloAdvent【VRChat】",
        video_timestamp: "2025-11-01T01:01:37.399+00:00",
        total_yen: 13604,
      },
      {
        video_id: "dcShhiwl82c",
        video_title:
          "Toy-Sized Heroes in a Horror Toy Story【Little Nightmares 3】",
        video_timestamp: "2025-10-27T18:57:44+00:00",
        total_yen: 12270,
      },
      {
        video_id: "Mj7JJQGWsNc",
        video_title:
          "Building My Platonic Digi-Male Polycule【Digimon Story: Time Stranger】",
        video_timestamp: "2025-11-04T00:38:22.484+00:00",
        total_yen: 1540,
      },
      {
        video_id: "_GUWfxJzXP0",
        video_title:
          "My Bug Will Turn into a Vaguely Hot 4 Legged Freak 【Digimon Story: Time Stranger】",
        video_timestamp: "2025-11-04T22:07:24.587+00:00",
        total_yen: 840,
      },
    ];
  }
  const { data, error } = await supabase.rpc("get_channel_superchat_summary", {
    target_channel_id: channelId,
  });
  if (error) {
    console.error(error);
    throw Error("failed to read daily_yen_amount");
  }
  return data;
}

export async function getChannelSuperchatTopDonor(channelId: string) {
  if (DEV_MODE) {
    return [
      { donor_name: "@mysticdonuts", total_yen: 24438 },
      { donor_name: "@bunkerzero", total_yen: 19360 },
      { donor_name: "@Senko445", total_yen: 16781 },
      { donor_name: "@ADualistPlays", total_yen: 15282 },
      { donor_name: "@Kaizen_Zen56", total_yen: 13962 },
      { donor_name: "@IngramPlisken", total_yen: 9147 },
      { donor_name: "@ijustwantedtocommentbutnow526", total_yen: 7853 },
      { donor_name: "@PixelxAffection", total_yen: 7640 },
      { donor_name: "@brawlflowers", total_yen: 7178 },
      { donor_name: "@Crush1084", total_yen: 7016 },
    ];
  }
  const { data, error } = await supabase.rpc("get_top_donors_by_channel", {
    target_channel_id: channelId,
  });
  if (error) {
    console.error(error);
    throw Error("failed to read daily_yen_amount");
  }
  return data;
}

export async function getChannelMetrics(channelId: string) {
  if (DEV_MODE) {
    return {
      totalYen: 177322,
      avgYenPerSC: 1144.0129032258064,
      avgYenPerStream: 35464.4,
    };
  }
  const { data, error } = await supabase
    .rpc("get_channel_metrics", { target_channel_id: channelId })
    .maybeSingle();
  if (error) {
    console.error(error);
    throw Error("failed to read daily_yen_amount");
  }
  let totalYen = 0;
  let avgYenPerSC = 0;
  let avgYenPerStream = 0;

  if (data) {
    totalYen = data.total_yen || 0;

    const scCount = data.superchat_count || 0;
    const streamCount = data.stream_count || 0;

    avgYenPerSC = scCount > 0 ? totalYen / scCount : 0;

    avgYenPerStream = streamCount > 0 ? totalYen / streamCount : 0;
  }
  return { totalYen, avgYenPerSC, avgYenPerStream };
}

export async function getVideoMetadata(videoId: string) {
  if (DEV_MODE) {
    return {
      timestamp: "2025-10-21T13:03:58.742+00:00",
      title: "【 MOTHER 】完全初見のMOTHER。#４【 ホロライブ / 大神ミオ 】",
      channel_id: "UCp-5t9SrOQwXMU7iIjQfARg",
    };
  }
  const { data, error } = await supabase
    .from("video_metadata")
    .select("timestamp, title, channel_id")
    .eq("id", videoId)
    .maybeSingle();

  if (error) {
    console.error(`Error fetching metadata for video ${videoId}:`, error);
    throw Error(error);
  }
  return data;
}

export async function getAllVideoIds() {
  if (DEV_MODE) {
    return [
      { id: "jLqwFhMkbgg" },
      { id: "Ipk16R-TznI" },
      { id: "F62QDBO-mxM" },
      { id: "m73wkwQNl2I" },
      { id: "dcShhiwl82c" },
      { id: "Mj7JJQGWsNc" },
      { id: "_GUWfxJzXP0" },
      { id: "SiTE2tiDPrM" },
      { id: "LbOsSfvDQhM" },
      { id: "pmk8AL3P4m8" },
      { id: "qoNEDzHqAuU" },
      { id: "LmaO6MRTI-s" },
      { id: "P1p8y5bF5Jw" },
      { id: "-7bedX7qbhE" },
      { id: "WfGS8QW-b40" },
      { id: "QmpfwGfZEi4" },
      { id: "2PwZmb5inxY" },
      { id: "vl-RzysAA8Y" },
      { id: "3O4jBkgdWRQ" },
      { id: "XNiRgmK54Hg" },
      { id: "uUwP1UYbYcU" },
      { id: "LczdUQYusak" },
      { id: "oea8O2eImgo" },
      { id: "QKjMh_IkEZY" },
      { id: "IL5J_ExYeMw" },
    ];
  }

  const { data, error } = await supabase.from("video_metadata").select("id");

  if (error) {
    console.error("Error fetching video IDs for getStaticPaths:", error);
    return [];
  }
  return data;
}

interface VideoMetrics {
  totalYen: number;
  scCount: number;
}
export async function getSuperchatMetrics(
  videoId: string
): Promise<VideoMetrics> {
  if (DEV_MODE) {
    return {
      totalYen: 458760,
      scCount: 955,
    };
  }
  const { data, error } = await supabase
    .rpc("get_video_metrics", { target_video_id: videoId })
    .maybeSingle();

  if (error) {
    console.error("Error fetching superchat metrics:", error);
    return { totalYen: 0, scCount: 0 };
  }

  return { totalYen: data.total_yen, scCount: data.sc_count } as VideoMetrics;
}

interface SuperchatRecord {
  id: number;
  name: string;
  yen_amount: number;
  timestamp: string;
}

export async function getVideoSuperchats(
  videoId: string
): Promise<SuperchatRecord[]> {
  if (DEV_MODE) {
    return [
      {
        id: 6348,
        name: "マキノ",
        yen_amount: 1600,
        timestamp: "2025-10-21T13:03:58.742+00:00",
      },
      {
        id: 6349,
        name: "FontyPython",
        yen_amount: 1074,
        timestamp: "2025-10-21T13:08:01.369+00:00",
      },
      {
        id: 6350,
        name: "mengeledddd",
        yen_amount: 500,
        timestamp: "2025-10-21T15:10:41.91+00:00",
      },
      {
        id: 6351,
        name: "たまごかけ刀[がたな]",
        yen_amount: 1000,
        timestamp: "2025-10-21T15:12:05.338+00:00",
      },
      {
        id: 6352,
        name: "黑羽醬油",
        yen_amount: 369,
        timestamp: "2025-10-21T15:12:33.591+00:00",
      },
      {
        id: 6353,
        name: "もりおっちゃん",
        yen_amount: 200,
        timestamp: "2025-10-21T15:12:34.941+00:00",
      },
      {
        id: 6354,
        name: "蒼狸丸【あおたぬきまる】",
        yen_amount: 200,
        timestamp: "2025-10-21T15:12:38.685+00:00",
      },
      {
        id: 6355,
        name: "akooka",
        yen_amount: 200,
        timestamp: "2025-10-21T15:12:45.715+00:00",
      },
    ];
  }

  const { data, error } = await supabase
    .from<SuperchatRecord>("superchats")
    .select("id, name,yen_amount, timestamp")
    .eq("video_id", videoId)
    .order("timestamp");

  if (error) {
    console.error("Error fetching superchats:", error);
    return [];
  }
  return data;
}

interface TopDonor {
  donor_name: string;
  total_yen: number;
}

export async function getTopDonors(videoId: string): Promise<TopDonor[]> {
  if (DEV_MODE) {
    return [
      { donor_name: "マキノ", total_yen: 1600 },
      { donor_name: "FontyPython", total_yen: 1074 },
      { donor_name: "たまごかけ刀[がたな]", total_yen: 1000 },
      { donor_name: "mengeledddd", total_yen: 500 },
      { donor_name: "黑羽醬油", total_yen: 369 },
      { donor_name: "akooka", total_yen: 200 },
      { donor_name: "もりおっちゃん", total_yen: 200 },
      { donor_name: "蒼狸丸【あおたぬきまる】", total_yen: 200 },
    ];
  }

  const { data, error } = await supabase.rpc("get_top_donors", {
    target_video_id: videoId,
  });
  if (error) {
    console.error("Error fetching top donors:", error);
    return [];
  }
  return data.map((obj) => ({
    donor_name: obj.name,
    total_yen: obj.yen_amount,
  })) as TopDonor[];
}

interface TimeSeriesData {
  minute_timestamp: string;
  cumulative_yen: number;
}

export async function getTimeSeriesMetrics(
  videoId: string
): Promise<TimeSeriesData[]> {
  if (DEV_MODE) {
    return [
      {
        minute_timestamp: "2025-10-21T13:03:00+00:00",
        cumulative_yen: 1600,
      },
      {
        minute_timestamp: "2025-10-21T13:08:00+00:00",
        cumulative_yen: 2674,
      },
      {
        minute_timestamp: "2025-10-21T15:10:00+00:00",
        cumulative_yen: 3174,
      },
      {
        minute_timestamp: "2025-10-21T15:12:00+00:00",
        cumulative_yen: 5143,
      },
    ];
  }
  const { data, error } = await supabase.rpc("get_time_series_metrics", {
    target_video_id: videoId,
  });

  if (error) {
    console.error("Error fetching time series metrics:", error);
    return [];
  }

  return data as TimeSeriesData[];
}

export async function getYenByName() {
  if (DEV_MODE) {
    return [
      { chat_name: "Sloth of Shadows", total_yen: 222870 },
      { chat_name: "@Generix90", total_yen: 212700 },
      { chat_name: "パーシス", total_yen: 200098 },
      { chat_name: "無色の警備係", total_yen: 150000 },
      { chat_name: "MAIMAI", total_yen: 143510 },
      { chat_name: "zipli", total_yen: 119943 },
      { chat_name: "@dan_game_ch", total_yen: 110000 },
      { chat_name: "なの", total_yen: 106750 },
      { chat_name: "Wrixne Lenti", total_yen: 104141 },
      { chat_name: "@musyoku_no", total_yen: 101000 },
    ];
  }
  const { data, error } = await supabase.rpc("get_top_10_donors");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getTopVideos() {
  if (DEV_MODE) {
    return [
      {
        video_id: "LbOsSfvDQhM",
        video_title:
          '【 雑談/Freetalk 】"SHINier"お疲れ様！！本当にありがとう！！【 常闇トワ / ホロライブ 】',
        video_timestamp: "2025-11-02T13:36:47.756+00:00",
        total_yen: 1586584,
      },
      {
        video_id: "pmk8AL3P4m8",
        video_title:
          "【 Minecraft 】1周年カウントダウンとホロ鯖ゆったり観光！！【#綺々羅々ヴィヴィ #hololiveDEV IS #FLOWGLOW】",
        video_timestamp: "2025-11-08T10:55:27.171+00:00",
        total_yen: 894570,
      },
      {
        video_id: "qoNEDzHqAuU",
        video_title:
          "【新衣装お披露目】遂にこの時が来た…ッ！！【百鬼あやめ/ホロライブ】",
        video_timestamp: "2025-11-02T13:33:24.844+00:00",
        total_yen: 743730,
      },
      {
        video_id: "LmaO6MRTI-s",
        video_title:
          "【 🟣雑談 】二ヶ月お休み頂いてました😸【 猫又おかゆ/ホロライブ 】",
        video_timestamp: "2025-11-02T13:33:16.983+00:00",
        total_yen: 703944,
      },
      {
        video_id: "P1p8y5bF5Jw",
        video_title:
          "【CloverPit】前回引いたフィーバータイムを継続させて１周年みんなとむかえるぞ🎰🔥【ホロライブ DEV IS 響咲リオナ】",
        video_timestamp: "2025-11-08T11:32:35.114+00:00",
        total_yen: 674460,
      },
      {
        video_id: "-7bedX7qbhE",
        video_title:
          "【雑談/chat】遂に1周年ですってよ！！！一緒に向かえよ～～【#輪堂千速 / #hololivedev is  #FLOWGLOW 】",
        video_timestamp: "2025-11-08T13:43:45.068+00:00",
        total_yen: 493673,
      },
      {
        video_id: "WfGS8QW-b40",
        video_title: "【3D LIVE】LOG IN: GAME START #ROCKINBiboo",
        video_timestamp: "2025-11-02T13:35:47.56+00:00",
        total_yen: 490111,
      },
      {
        video_id: "QmpfwGfZEi4",
        video_title:
          "【CHATTINI DAY: 3D SPECIAL】IT'S CHATTINI APPRECIATION DAY!!! 🩵 YAAAY! + ANNOUNCEMENT",
        video_timestamp: "2025-10-19T12:09:57+00:00",
        total_yen: 464894,
      },
      {
        video_id: "2PwZmb5inxY",
        video_title:
          "【マリオカート8DX】1周年カウントダウン参加型❕1位目指す❕✨【水宮枢／ホロライブDEV IS】",
        video_timestamp: "2025-11-07T14:00:55.255+00:00",
        total_yen: 458058,
      },
      {
        video_id: "vl-RzysAA8Y",
        video_title:
          "【GIGI MURIN BDAY 2025】A PARTY AFTER A PARTY?!?! LIKE AN AFTERPARTY?!?",
        video_timestamp: "2025-10-21T21:03:08.67+00:00",
        total_yen: 383830,
      },
    ];
  }
  const { data, error } = await supabase.rpc(
    "get_top_10_videos_by_yen_with_title"
  );

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getTopChannels() {
  if (DEV_MODE) {
    return [
      { channel_id: "UC1uv2Oq6kNxgATlCiez59hw", total_yen: 1940125 },
      { channel_id: "UCGzTVXqMQHa4AgJVJIVvtDQ", total_yen: 1824191 },
      { channel_id: "UC9p_lqQ0FEDz327Vgf5JwqA", total_yen: 1567352 },
      { channel_id: "UC6eWCld0KwmyHFbAqK3V-Rw", total_yen: 1388284 },
      { channel_id: "UCL_qhgtOy0dy1Agp8vkySQg", total_yen: 1199658 },
      { channel_id: "UC9LSiN9hXI55svYEBrrK-tw", total_yen: 1058932 },
      { channel_id: "UC0TXe_LYZ4scaW2XMyi5_kw", total_yen: 1011374 },
      { channel_id: "UCqm3BQLlJfvkTsX_hvm0UmA", total_yen: 984356 },
      { channel_id: "UCDHABijvPBnJm7F-KlNME3w", total_yen: 964652 },
      { channel_id: "UCjk2nKmHzgH5Xy-C5qYRd5A", total_yen: 952520 },
    ];
  }
  const { data, error } = await supabase.rpc("get_top_10_channels_by_yen");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getRecentVideos() {
  if (DEV_MODE) {
    return [
      {
        id: "3O4jBkgdWRQ",
        video_timestamp: "2025-12-30T21:14:15+00:00",
        channel_id: "UCO_aKKYxn4tvrqPjcTzZ6EQ",
        title: "【MINECRAFT】 THE GRAND FINALE. THE WORLD TREE IS COMPLETE",
        total_yen: 0,
      },
      {
        id: "XNiRgmK54Hg",
        video_timestamp: "2025-12-29T23:24:06+00:00",
        channel_id: "UCO_aKKYxn4tvrqPjcTzZ6EQ",
        title: "Drawing Hololive Members From Memory with @GawrGura !",
        total_yen: 0,
      },
      {
        id: "uUwP1UYbYcU",
        video_timestamp: "2025-11-08T18:00:53.698+00:00",
        channel_id: "UCgnfPPb9JI3e9A4cXHnWbyg",
        title: "Cursed Auction: Curator Keeps Collecting Haunted Items!",
        total_yen: 153045,
      },
      {
        id: "LczdUQYusak",
        video_timestamp: "2025-11-08T15:06:50.249+00:00",
        channel_id: "UChgTyjG-pdNvxxhdsXfHQ5Q",
        title:
          "#2【Urban Myth Dissolution Center】THROWS TOMATOES AT YOU【Pavolia Reine/hololiveID】",
        total_yen: 24748,
      },
      {
        id: "oea8O2eImgo",
        video_timestamp: "2025-11-08T13:52:30.254+00:00",
        channel_id: "UCFKOVgVbGmX65RxO3EtH3iw",
        title:
          "【雑談】この枠がぐるぐるだったら諦める！！【 雪花ラミィ /ホロライブ】",
        total_yen: 45032,
      },
      {
        id: "-7bedX7qbhE",
        video_timestamp: "2025-11-08T13:43:45.068+00:00",
        channel_id: "UCKMWFR6lAstLa7Vbf5dH7ig",
        title:
          "【雑談/chat】遂に1周年ですってよ！！！一緒に向かえよ～～【#輪堂千速 / #hololivedev is  #FLOWGLOW 】",
        total_yen: 493673,
      },
      {
        id: "QKjMh_IkEZY",
        video_timestamp: "2025-11-08T13:07:48.727+00:00",
        channel_id: "UCOyYb1c43VlX9rc_lT6NKQw",
        title: "Camper Van Java",
        total_yen: 1141,
      },
      {
        id: "IL5J_ExYeMw",
        video_timestamp: "2025-11-08T12:08:43.976+00:00",
        channel_id: "UCp6993wxpyDPHUpavwDFqgg",
        title:
          "【祝MV１００万再生】ありがとうPulse歌枠【ホロライブ/ときのそら】",
        total_yen: 26998,
      },
      {
        id: "P1p8y5bF5Jw",
        video_timestamp: "2025-11-08T11:32:35.114+00:00",
        channel_id: "UC9LSiN9hXI55svYEBrrK-tw",
        title:
          "【CloverPit】前回引いたフィーバータイムを継続させて１周年みんなとむかえるぞ🎰🔥【ホロライブ DEV IS 響咲リオナ】",
        total_yen: 674460,
      },
      {
        id: "pmk8AL3P4m8",
        video_timestamp: "2025-11-08T10:55:27.171+00:00",
        channel_id: "UCGzTVXqMQHa4AgJVJIVvtDQ",
        title:
          "【 Minecraft 】1周年カウントダウンとホロ鯖ゆったり観光！！【#綺々羅々ヴィヴィ #hololiveDEV IS #FLOWGLOW】",
        total_yen: 894570,
      },
    ];
  }
  const { data, error } = await supabase.rpc("get_most_recent_videos");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getSuperchatCount(): number {
  if (DEV_MODE) {
    return 22942;
  }
  const { data, error } = await supabase.rpc("get_superchat_count");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getUniqueVideoCount(): number {
  if (DEV_MODE) {
    return 793;
  }
  const { data, error } = await supabase.rpc("get_unique_video_count");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}
