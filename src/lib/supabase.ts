import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);

export async function getVideos() {
  const { data, error } = await supabase.from("video_metadata").select("title");
  return data;
}

export async function getDailyYenAmount() {
  const { data, error } = await supabase.rpc("daily_yen_amount");

  if (error) {
    console.error(error);
    throw Error("failed to read daily_yen_amount");
  }
  return data;
}

export async function getChannelSuperchatSummary(channelId: string) {
  const { data, error } = await supabase.rpc("get_channel_superchat_summary", {
    target_channel_id: channelId,
  });
  console.log({ data });
  if (error) {
    console.error(error);
    throw Error("failed to read daily_yen_amount");
  }
  return data;
}

export async function getChannelSuperchatTopDonor(channelId: string) {
  const { data, error } = await supabase.rpc("get_top_donors_by_channel", {
    target_channel_id: channelId,
  });
  console.log({ data });
  if (error) {
    console.error(error);
    throw Error("failed to read daily_yen_amount");
  }
  return data;
}

export async function getChannelMetrics(channelId: string) {
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
  return [
    { id: "SiTE2tiDPrM" },
    { id: "voBy_g0fsOQ" },
    { id: "oR30H4rRC4M" },
    { id: "xwYiJ3GQXEA" },
    { id: "9J0lEJ9RiFs" },
    { id: "XEda2P1S9_o" },
    { id: "H3T21sV3kT0" },
    { id: "TEYOp98Wvho" },
    { id: "tXHPeDHB64s" },
    { id: "VJm12Ztekgo" },
    { id: "bxUdgYKIt5s" },
    { id: "4I5JQqYIWBg" },
    { id: "d5ogsovblzc" },
    { id: "0Lyo6TqXfA4" },
    { id: "D6F3CeJhS4k" },
    { id: "JMBYl4WWL6U" },
    { id: "DL8nY0VsPgI" },
    { id: "P2dXG0RxmOY" },
    { id: "qlb-40wX0mM" },
    { id: "a4g5YgfNmnI" },
    { id: "NeSfyLiFZvs" },
    { id: "Az3UFeYUCWY" },
    { id: "wF1PxC9vExw" },
    { id: "B_Em-mootYE" },
    { id: "HE8hZKQnfm0" },
    { id: "1lAhzwIklpg" },
    { id: "i5Z623JmI1E" },
    { id: "uzbe_Ra0l_I" },
    { id: "gMvNFZ-PF7M" },
    { id: "8vtWkeFpNoY" },
    { id: "7wHqfCsoB6g" },
    { id: "dfhAHDCgUoE" },
    { id: "Y6N5lQytE9g" },
    { id: "fbuZCqieq3c" },
    { id: "wKCCrdXABzk" },
    { id: "1puOqOpSCOk" },
    { id: "TUmY5nXuId4" },
    { id: "UZeIaGxQ3zc" },
    { id: "-GKGl6atYtw" },
    { id: "BDpooG26oy8" },
    { id: "otn1y_AD7Ys" },
    { id: "dYM94kC-5fQ" },
    { id: "MwnVTKmOcG8" },
    { id: "HspUPwd9Ap4" },
    { id: "0tWwzoXzzaE" },
    { id: "HuA4wn03Ack" },
    { id: "U4yrotubI6g" },
    { id: "qyRxUlxFq5g" },
    { id: "mOyeTau73XQ" },
    { id: "ul1PaNh4k7Y" },
    { id: "S0Ef362K5qo" },
    { id: "G8wrjCkgyRM" },
    { id: "jjm6dSej2jU" },
    { id: "XrH5Zgc5g8w" },
    { id: "i-EreP4zejg" },
    { id: "l4dzbGsMeBU" },
    { id: "RDp8Kb55CPY" },
    { id: "rssqMq0pKPs" },
    { id: "Hqw7v8kc9hg" },
    { id: "-aBgNWFPuZw" },
    { id: "qUb0k9-mB7Q" },
    { id: "1_db4VL9mzM" },
    { id: "TRB3A0UZneg" },
    { id: "0SmsT7mp0GI" },
    { id: "4u6oRPBv35E" },
    { id: "PN2CYNlpcRs" },
    { id: "3KT0ShW51b4" },
    { id: "Ob_nBcLd1Es" },
    { id: "Yf06ZceO3Js" },
    { id: "TcRI88ijcJ4" },
    { id: "wsDyBShxDuw" },
    { id: "fDtUy1PTor0" },
    { id: "RBBwfP1rtkE" },
    { id: "xtYdo3HteYU" },
    { id: "ERB5O16-SZw" },
    { id: "izMrbcgKVtY" },
    { id: "pAFgy6hLjqc" },
    { id: "PIoVY8xcGyY" },
    { id: "YHfc0M3CGw0" },
    { id: "U9paX0Kjt1k" },
    { id: "_T-1Vvm1fPA" },
    { id: "4RYbmR8oJHw" },
    { id: "d_DD2bzkEHg" },
    { id: "QcBj02A8ln4" },
    { id: "WUe-ylfdHSk" },
    { id: "qBfBVk_l0TU" },
    { id: "XIwpSS6PVGw" },
    { id: "48VYp4T1UKM" },
    { id: "VcHUajZ_zks" },
    { id: "NyQA-oXdwS4" },
    { id: "_p0828ivKrA" },
    { id: "6rwF8U-Zh4I" },
    { id: "aOcYn6YAO5E" },
    { id: "uRa-uLMea7w" },
    { id: "IiDk7VXOs0k" },
    { id: "5wOimVAtXoA" },
    { id: "SzuAlTDREsc" },
    { id: "08tWy9YWmsA" },
    { id: "d9pq4ZLjGos" },
    { id: "-dfJItMJWO4" },
    { id: "3kiaS62dJgc" },
    { id: "HGeitwJ_wY0" },
    { id: "KqB6ZwAYjYQ" },
    { id: "IzWjGVkyDC0" },
    { id: "dy1jkkfSTyI" },
    { id: "XSqXsnBpA48" },
    { id: "hs_U2-8az4w" },
    { id: "l5428JVHdz8" },
    { id: "7-yUQ5qVN90" },
    { id: "giFopEq-PBc" },
    { id: "KdWG3Gicoyg" },
    { id: "Mh0Vo6stuGI" },
    { id: "JGdMDs0fX_g" },
    { id: "jj-NExrxw_s" },
    { id: "b_GWiMPuAiA" },
    { id: "-DjyftlN8PE" },
    { id: "9M6F2U9sm14" },
    { id: "vWJPCsg18pU" },
    { id: "3orF2kRC2L4" },
    { id: "0CPBENAQF_k" },
    { id: "v6dNVXJqVw8" },
    { id: "RTKG67UGP6Y" },
    { id: "HtkkIOx_Sfo" },
    { id: "AHjazZpvEWk" },
    { id: "SOPKN5jgUpU" },
    { id: "cJlh43bItqU" },
    { id: "l0FpveNqs4g" },
    { id: "HOjWUmxXWI0" },
    { id: "MTywdL9sMcg" },
    { id: "vXiU1tDA9ZU" },
    { id: "wZafU0_bj7I" },
    { id: "LMlyKNeL1tg" },
    { id: "C1tQWjRNbeI" },
    { id: "KYvF41SKT3M" },
    { id: "m1oi6jeAHnc" },
    { id: "777euNVq7fg" },
    { id: "SGkpPWnrYpE" },
    { id: "qqkS4vlxVnM" },
    { id: "PNVkVdesHmQ" },
    { id: "-j1zYG-1f80" },
    { id: "l-O1P4_x02E" },
    { id: "VSnfUNZ97no" },
    { id: "7BTLXHA9y2E" },
    { id: "4DwqbLghI2Y" },
    { id: "zUzrsNNpAGg" },
    { id: "TJM7dqwo3U4" },
    { id: "Fb_HZtzAWgY" },
    { id: "mCyc-KEQVVk" },
    { id: "0ZE37FEeS7Y" },
    { id: "GZ6ZESeWnrU" },
    { id: "GiUAND_n93s" },
    { id: "4dWw6EHi8Cg" },
    { id: "fZJXBQs4PEc" },
    { id: "FjDumQYvenc" },
    { id: "v2QhoirYIzE" },
    { id: "BycCw8FrzXo" },
    { id: "7UAlYSjJ6_s" },
    { id: "4s80sJPlUFg" },
    { id: "tkz3Fcd3ZM0" },
    { id: "Pgo1fIdJ5d8" },
    { id: "nCjwbQ81Csc" },
    { id: "M8XesbGoCZg" },
    { id: "irWmxKauI5Q" },
    { id: "RYp73yqPsc8" },
    { id: "yZDOLzMh6vY" },
    { id: "gPA1xnao7sM" },
    { id: "ZjuDUe4jnqE" },
    { id: "UKpuCbwi8yI" },
    { id: "Wp8GOoATVdM" },
    { id: "pFo3V8Hz8Rw" },
    { id: "i_ViOwxbknA" },
    { id: "MHvP0RM4Z3E" },
    { id: "KasZ-eo1AdQ" },
    { id: "MKsmL9AceDM" },
    { id: "E-ARWmpb8KI" },
    { id: "6YFt3Era_Jc" },
    { id: "0jwoVBlt2q8" },
    { id: "RAilx21BVbU" },
    { id: "5-_g6RMm6A8" },
    { id: "fAr2rO5KEF0" },
    { id: "ILDmKspiOWY" },
    { id: "4XpFMqsrqmQ" },
    { id: "SLDfbA5I3vk" },
    { id: "LKUlC3NSutI" },
    { id: "uFhvQb1g6Nk" },
    { id: "KTS9GyB0DoQ" },
    { id: "hFM95mPHHfg" },
    { id: "_y2I-_3vMrE" },
    { id: "jGPt1XApIng" },
    { id: "3CRnlfFdxDc" },
    { id: "K6ixYw-pcX4" },
    { id: "Gt0egouh-h8" },
    { id: "E7VYrlzYUEI" },
    { id: "j42Hjc3EXjg" },
    { id: "SXHDHV5eonM" },
    { id: "kqkjd0Pl0No" },
    { id: "xV3Ph-JhzHg" },
    { id: "oiF4YuAMK_s" },
    { id: "kKMiPjy1nRM" },
    { id: "DCyOMwajb20" },
    { id: "VMWrnCOpFdI" },
    { id: "RwbpPcZSmBE" },
    { id: "amLWUwgnTOM" },
    { id: "x9SvLcGDaS4" },
    { id: "C7aWw9WtBQk" },
    { id: "uIp0RtZg_m0" },
    { id: "E31Pc9EQJZ8" },
    { id: "fDybtUOXTqo" },
    { id: "2pv9d-N77xw" },
    { id: "QOZn2GZeTbk" },
    { id: "0RWQiuKlGBk" },
    { id: "34hL0p2yBDE" },
    { id: "kfiwW3MR4_w" },
    { id: "y9ViYpUx-aw" },
    { id: "td7wBYkWWjI" },
    { id: "TjzThsVgeRA" },
    { id: "ZJ_cs91q-LU" },
    { id: "y6B0aLLfDjQ" },
    { id: "EaeIMiXY4EY" },
    { id: "kmMiQeMBEgc" },
    { id: "Pvk-0rCQzOc" },
    { id: "sH7RKFQs1t4" },
    { id: "i7hbr4PEDg4" },
    { id: "AjVRNxi7IyM" },
    { id: "5N-IH6Bst-o" },
    { id: "Utu9hixW6mc" },
    { id: "F9lbxgimNIE" },
    { id: "JW-rnSHm-_4" },
    { id: "KjjJgpgRlqQ" },
    { id: "dIsw1wArWcI" },
    { id: "wxnTKRkpePs" },
    { id: "n51Zwn1ONfg" },
    { id: "HPISJ_xCQ8o" },
    { id: "3IYFW8DjGBY" },
    { id: "kGh0DwaBwd4" },
    { id: "r5RVP-ZW88U" },
    { id: "YDbrdDl1ouQ" },
    { id: "gJ_Bx4C15JI" },
    { id: "TJFxdJ4cF-c" },
    { id: "YYGuEXjHzBI" },
    { id: "1Fe2PN67HEc" },
    { id: "MI3WYMUC9eE" },
    { id: "cPe6uVylj-U" },
    { id: "5NbaUycmr88" },
    { id: "harcL9CjAlY" },
    { id: "N9-hfp0DwLQ" },
    { id: "rnXXIjLk2qo" },
    { id: "Ty_mDAPE_XI" },
    { id: "_QiFC5DZsa4" },
    { id: "SLSh9lsS7zk" },
    { id: "f1YcyCgeI44" },
    { id: "c7sUj2rg0Cg" },
    { id: "Qx8EHmo8PMk" },
    { id: "Sm2QkrIawFI" },
    { id: "96UI_5yU4jA" },
    { id: "V5GfPGLBJEc" },
    { id: "voB3uHdrUhs" },
    { id: "l-WvlND1M2o" },
    { id: "F9ILQIq5hac" },
    { id: "AcFFyMKvrxI" },
    { id: "ELImAqDfMdk" },
    { id: "XjIj15D8Fi4" },
    { id: "WCRmp55srk4" },
    { id: "KsZrsU1tCuA" },
    { id: "E2TauvPm7Bs" },
    { id: "KqIJudUvUc0" },
    { id: "7jw91wEsYlo" },
    { id: "4il8JX7W9ww" },
    { id: "4ufEU2jvcB8" },
    { id: "GYPo2ceAzVA" },
    { id: "m2ksIzIjYMg" },
    { id: "jNlojNbC1wk" },
    { id: "9wgyfnzkvmc" },
    { id: "7yJnbQjS-7E" },
    { id: "h7NwiNBDJ-Y" },
    { id: "MVPXZxto84U" },
    { id: "l5XtdD5dN4Y" },
    { id: "xFdiqbiFE2M" },
    { id: "F6wIuUrsqQQ" },
    { id: "OYkM8lC8spA" },
    { id: "KI6oTwUu71M" },
    { id: "jdHbPlw3iAY" },
    { id: "Ir5AChRyt_Y" },
    { id: "DXo7cXf7XPE" },
    { id: "xHrgakuXJyQ" },
    { id: "C1HTXlQLgVs" },
    { id: "B1QDOaU5JCM" },
    { id: "VPtWOEgIoRA" },
    { id: "G1F8qy30xoo" },
    { id: "abRBThUWeqE" },
    { id: "xi1P-Ri0T84" },
    { id: "Ry4qblLzPtQ" },
    { id: "Gr7Nf9KlIsY" },
    { id: "2BMAEQQmCFg" },
    { id: "0OGVPabZjIE" },
    { id: "EeO0FSx6d88" },
    { id: "mvV8dQjFR1s" },
    { id: "bofOIM3EVoU" },
    { id: "rRpDrrCclNo" },
    { id: "82maXb_gnBM" },
    { id: "Y4dSfOLU-rA" },
    { id: "LB-lxnmpBnM" },
    { id: "tiHb4YCsAV4" },
    { id: "F-7vG3TpntE" },
    { id: "qQ7b7KcNkq4" },
    { id: "qExwvwykzsU" },
    { id: "F1PRA4IBP8c" },
    { id: "N4D38fQkHBk" },
    { id: "UI3lZFMgm7U" },
    { id: "ItSzk490lyI" },
    { id: "atffJuZWhx8" },
    { id: "VxtKjIQoxp4" },
    { id: "PabqLOKlvr4" },
    { id: "9gOJI2DOihc" },
    { id: "FXy_tmka00Y" },
    { id: "i7OZQofkfqg" },
    { id: "QnFNt0LDkj4" },
    { id: "1qrrPJH8_gE" },
    { id: "a8GE1Wuamjc" },
    { id: "WQ_PUJnSuxE" },
    { id: "7a2IchU0lrk" },
    { id: "vOJeK3hllEY" },
    { id: "qWyCmpszavw" },
    { id: "xWClvFiAgMY" },
    { id: "g83ppe-AiVY" },
    { id: "FplAYwsBBNY" },
    { id: "8x_Y2PmxJok" },
    { id: "eNCp4mfpqh0" },
    { id: "Uz2XU3GAp5g" },
    { id: "2HDsLdTunB4" },
    { id: "X9eatHq84nI" },
    { id: "Ss_Rw6nObdI" },
    { id: "D5XrQD2RkUw" },
    { id: "EAdh6m3E3UI" },
    { id: "qgYK9k2KF7Q" },
    { id: "56JvXvA51ls" },
    { id: "iOK-8J6l_ak" },
    { id: "9qkkPOD85YE" },
    { id: "N5c4sjyvbF0" },
    { id: "pmKECbicZKc" },
    { id: "kuHu_QbqPME" },
    { id: "i2sw2i6_XDk" },
    { id: "kK8zLy0DZk4" },
    { id: "6EK_rv-i5fY" },
    { id: "I-Y4qlXzkg0" },
    { id: "OFIVy79pgWc" },
    { id: "My0Zm883qkY" },
    { id: "3O4jBkgdWRQ" },
    { id: "XNiRgmK54Hg" },
    { id: "jaF5B5_D_Ek" },
    { id: "Odbzyv3ZAu0" },
    { id: "D9ff2vAAMO8" },
    { id: "9ybSgLgloVs" },
    { id: "gvNGbSlGJ40" },
    { id: "kx9k0lq51y4" },
    { id: "6205T1jAc5M" },
    { id: "XfIeDZsGE_o" },
    { id: "4ix7525X1cE" },
    { id: "tTABc1SlO8U" },
    { id: "0CxQ7XOVWZA" },
    { id: "XQnqXqWQ4Is" },
    { id: "F_EVW5Ig5QE" },
    { id: "ENFvQFWoFFA" },
    { id: "sUF9wbgrLD8" },
    { id: "P6GLC_HnCUU" },
    { id: "r-vkvN0sHv8" },
    { id: "dZQoJqlysqo" },
    { id: "L_N74KgbeA8" },
    { id: "ygILKuT0NDE" },
    { id: "y9PBUgw5J_w" },
    { id: "Mjc1lqt05Bk" },
    { id: "YHM6cwSNQl8" },
    { id: "Ipk16R-TznI" },
    { id: "dcShhiwl82c" },
    { id: "jLqwFhMkbgg" },
    { id: "haEdpgAHdjg" },
    { id: "oLUY5vnkPKY" },
    { id: "CVrQI_-wnRc" },
    { id: "RyelZGrCxWY" },
    { id: "eY-YW4HsrfQ" },
    { id: "62qk4iabOZE" },
    { id: "OV5l80QvpOA" },
    { id: "edUhrj2dNes" },
    { id: "FTw7PyTjuco" },
    { id: "4dlHs0Z2-Z4" },
    { id: "r8MsmrsUIm8" },
    { id: "Nflc1V_u65M" },
    { id: "E4zCX9imTnQ" },
    { id: "s3yvJYLhvgA" },
    { id: "OwfEV4RYIH0" },
    { id: "KhPmWFMGaSc" },
    { id: "ciRz6G-_Z4g" },
    { id: "BNzEziu-rms" },
    { id: "6ZjMOuQomNI" },
    { id: "m37HoSFic2M" },
    { id: "e9sGwDFTEJU" },
    { id: "ub9_vBd6N30" },
    { id: "z2MPFnjBV5w" },
    { id: "EQh0DUL4Z38" },
    { id: "p5CTGtXXFp8" },
    { id: "rTDqgP5-MTc" },
    { id: "lAP-AA3y8GM" },
    { id: "KxUWwFzV74A" },
    { id: "uPOl9fcf3Dc" },
    { id: "si5nKzdLGyw" },
    { id: "NDEkkwrKEjY" },
    { id: "bV_OIC4PAWA" },
    { id: "bNoVsoLRaYg" },
    { id: "VUURP218SOc" },
    { id: "TZiMgUFHN_Y" },
    { id: "J5d-bZt-H38" },
    { id: "wgP_4s7mJ-Y" },
    { id: "n-B6Hqp-tmE" },
    { id: "qkWItqWEl34" },
    { id: "mhWu3pJMGdo" },
    { id: "PeKyw5o_fDo" },
    { id: "7W_Q57Aj_f4" },
    { id: "85W8ncUiHSM" },
    { id: "vl-RzysAA8Y" },
    { id: "b3EuU6gUCpg" },
    { id: "MsIcK8Ycjt4" },
    { id: "EvdDIJ2ojDM" },
    { id: "tfXti8kI2Fc" },
    { id: "tIwqiWqgosc" },
    { id: "SgAilx433Eo" },
    { id: "Xlzd4DuJEX4" },
    { id: "tSH1ayb2Li0" },
    { id: "RTN5A-mEbTI" },
    { id: "AwuHl-fYKQY" },
    { id: "kWv0VUw_5Ec" },
    { id: "1scxmtyz6Ws" },
    { id: "XuIJvcwdFJ0" },
    { id: "-zVxBQ8ffHY" },
    { id: "w_BFFzmnZXY" },
    { id: "BJjpnATUFkU" },
    { id: "1BTd20qIfBI" },
    { id: "qEPUyBd899c" },
    { id: "X20VS1MNcLY" },
    { id: "nVIkEXJvAdQ" },
    { id: "3cxglMyveds" },
    { id: "QmpfwGfZEi4" },
    { id: "M70XbYSuvw8" },
    { id: "YyAiLmldlr0" },
    { id: "dFY9n8k2Iuk" },
    { id: "tdds71h4qdQ" },
    { id: "AcCARPOWTM0" },
    { id: "AiFbjfZzips" },
    { id: "Ufzlc2vyhMI" },
    { id: "g6B4cX8T7nM" },
    { id: "CRlrioFBOKQ" },
    { id: "ZKX3MYIvzpw" },
    { id: "jLbINe9aG7I" },
    { id: "wIzUKX0XD8E" },
    { id: "aWE0beKIWtc" },
    { id: "XjuYABqlpj4" },
    { id: "xbILYvO8DQQ" },
    { id: "Sa4bN_xRkbI" },
    { id: "L07ydDR6omA" },
    { id: "m6AXQQv1Z8w" },
    { id: "db9_YJ5_rW4" },
    { id: "mAjoCkvCX90" },
    { id: "KvLVovDf88Y" },
    { id: "c4Wk9aO_LOo" },
    { id: "duNtL_8ILoY" },
    { id: "trd1Yms22IQ" },
    { id: "VYeLgnmVaL4" },
    { id: "J8v4rJzQoqM" },
    { id: "ICK7pKWdYZ8" },
    { id: "YWNMkUcLunE" },
    { id: "R5OF99u42as" },
    { id: "RfD1NIpuQLY" },
    { id: "_cEV9V8JkCw" },
    { id: "z0jUMqtQhXE" },
    { id: "d20CmpnX3J4" },
    { id: "bqyGjtoUhAY" },
    { id: "PqHAdx1TIrw" },
    { id: "stTo2j003js" },
    { id: "w6z-pweAfmE" },
    { id: "wKyyo9rZaP8" },
    { id: "r7yJV0ZDyl4" },
    { id: "k26tRsiXnjk" },
    { id: "suMjC-XZkX4" },
    { id: "m02P03R9j1k" },
    { id: "Ire6VtjH-lQ" },
    { id: "L-y8FHiBWBg" },
    { id: "5XXrdpGJ_DQ" },
    { id: "kpnF-BwMTxA" },
    { id: "vI13vd6663M" },
    { id: "p-GWssrBWuQ" },
    { id: "4aiq3t_OH-Q" },
    { id: "0YRL4UAVUdg" },
    { id: "wG8sWJmnye8" },
    { id: "Y_BLkHjumcM" },
    { id: "zaNUqhvNcKE" },
    { id: "hN0w46fTfXI" },
    { id: "AYgrhf2P_W8" },
    { id: "Ym8S6PHqjt4" },
    { id: "F62QDBO-mxM" },
    { id: "54MIJmQxnL0" },
    { id: "ttiJ4o4YmR0" },
    { id: "cMReIopmScg" },
    { id: "Mh2ZUqzVbok" },
    { id: "wO-p2nbOy1E" },
    { id: "PleXMf7V7M0" },
    { id: "SijrVN7wL5s" },
    { id: "V1CbWb08KDw" },
    { id: "VX-JE1b-lmk" },
    { id: "wzAfOvZ760c" },
    { id: "gv-4Uohn2j4" },
    { id: "6-rZ7ZJSZSU" },
    { id: "GJReIH3er8Y" },
    { id: "PYHXn0jHnkI" },
    { id: "qi9ShUEdbKQ" },
    { id: "NTksndf1hm0" },
    { id: "duwIcFRzy-8" },
    { id: "oBTiw8B9A1c" },
    { id: "EeE5pKh4DX4" },
    { id: "ry3qT6Il7x8" },
    { id: "jp8AL5pb2RU" },
    { id: "-O_2bmUCXQg" },
    { id: "vZdM29dg1uk" },
    { id: "Iq7_ZKgTuzs" },
    { id: "dfX2LNasuhE" },
    { id: "lYBajW_mfUU" },
    { id: "sHIIoAeUaAU" },
    { id: "OHuZDnYy-AE" },
    { id: "WndPM7sqwTY" },
    { id: "NI97-uPK96c" },
    { id: "QAhe7pgLoyU" },
    { id: "Rkt72UzbZps" },
    { id: "AhNXdduB8-k" },
    { id: "cN07r4DGucU" },
    { id: "Wnd2PBDZ7_U" },
    { id: "rP-u7XCzx5U" },
    { id: "5RZq8yzJzqM" },
    { id: "tBj1e98NEzk" },
    { id: "fRqhZO4M55A" },
    { id: "pR8SM92aC0U" },
    { id: "wBeZOeDyqdQ" },
    { id: "Fx5xOPcGZh0" },
    { id: "RFr8LhAFQxg" },
    { id: "JjQFupfSZXk" },
    { id: "M1hjH2rQl1Y" },
    { id: "LDOGuE7k0hs" },
    { id: "Y_DSgJYxKf8" },
    { id: "AtTiexIvTug" },
    { id: "kWAdT8qt8_8" },
    { id: "48MPT3f1R2I" },
    { id: "_qpO8vi9fpA" },
    { id: "f1HyGkeWoFQ" },
    { id: "PJyKiE7ppFY" },
    { id: "O4eGxOp6Tvk" },
    { id: "0korpnjmZAI" },
    { id: "DbTYon0F2Po" },
    { id: "nZn43abvpog" },
    { id: "OnDrU5eCihA" },
    { id: "p6AyEyHPwfE" },
    { id: "yCn58iA1mOA" },
    { id: "BxrIJzA4DpU" },
    { id: "lXNzhIaCY04" },
    { id: "tLSFtmaTMIk" },
    { id: "NFtjeVAUuC8" },
    { id: "axQLJyNCbys" },
    { id: "zDZK_e1z7kw" },
    { id: "J6Blj6gy51c" },
    { id: "tKI-TdesWus" },
    { id: "oyYgeVvHO2Y" },
    { id: "8ngKArtcNWw" },
    { id: "4NgX0H6C5ok" },
    { id: "x7WPM9FSGko" },
    { id: "waDW67klVao" },
    { id: "0gUafbITA3I" },
    { id: "GFGhBlKGsKo" },
    { id: "m73wkwQNl2I" },
    { id: "yaDU2-JP_zg" },
    { id: "vwuh3jK9ZZ8" },
    { id: "Cro4l4ccpww" },
    { id: "NOWrWWz98XI" },
    { id: "X7_Tl26gcZM" },
    { id: "IBY2X0P_ESk" },
    { id: "2s19HCuj63w" },
    { id: "H0rT0HoPoik" },
    { id: "13cGhG1VMBc" },
    { id: "d0vDQvV3jwI" },
    { id: "oHoPh1NeVr8" },
    { id: "uV_cs5Zuats" },
    { id: "LmaO6MRTI-s" },
    { id: "qoNEDzHqAuU" },
    { id: "L-XVS13TRTI" },
    { id: "cFEaiDPARDs" },
    { id: "6MnL53Kb9LE" },
    { id: "OdkJFj7b7Gw" },
    { id: "oIc7Nq_LzEY" },
    { id: "8mLMZJ4AEME" },
    { id: "dohsb75WVY4" },
    { id: "b5UOXcp65fU" },
    { id: "mZPcE3JJGds" },
    { id: "gcaL3_l53lo" },
    { id: "orIbe_0quSQ" },
    { id: "mNLf-JgAN1M" },
    { id: "nx9DVRTdy1Q" },
    { id: "R4UXJWBWA0M" },
    { id: "zl29lI6ToCw" },
    { id: "fNugCYXlblw" },
    { id: "U-dFxkEvBbY" },
    { id: "0p7Xk4Knkn0" },
    { id: "1mBsihFbFBI" },
    { id: "dccQndQpGXE" },
    { id: "7NJ8ZJ57tOE" },
    { id: "5OkpzDeSd0A" },
    { id: "_koV1wllG6A" },
    { id: "UbrlOdSXw1o" },
    { id: "WfGS8QW-b40" },
    { id: "fJ80E_sbic8" },
    { id: "SxPs5aKg45U" },
    { id: "XSZ0iMP80QQ" },
    { id: "JLWtvwYMeKk" },
    { id: "UF9uLZP5n0c" },
    { id: "vJ2yfebz-PM" },
    { id: "BOVsp1Efdtc" },
    { id: "fV8Q2xOGcog" },
    { id: "hOjc3RMhL2w" },
    { id: "Ib25M9sOBT8" },
    { id: "xIhH3P80EKY" },
    { id: "LbOsSfvDQhM" },
    { id: "3pUNgLPyjPM" },
    { id: "SE67pNYqWAk" },
    { id: "7dK0r-WoV58" },
    { id: "smEbqlxqRoI" },
    { id: "CKJJ5o1NY7w" },
    { id: "qb51ZfcpDx0" },
    { id: "-MPDDR2QiLQ" },
    { id: "do8EmK-XoAg" },
    { id: "sWXya9NCpf4" },
    { id: "9iJQmH5BC6g" },
    { id: "NOMPPR2UPPM" },
    { id: "pRIjGYn5-tc" },
    { id: "3rREfLtWGt8" },
    { id: "TKp_P3C4YTE" },
    { id: "phrmAvNnxlc" },
    { id: "6FpijUaQWh8" },
    { id: "v3mZjBnG_jA" },
    { id: "kIvAgMjZzd4" },
    { id: "seJADkxjD7E" },
    { id: "eWZrOI78cxI" },
    { id: "qBVZw90APDU" },
    { id: "lRuV8LxIRNo" },
    { id: "HbPwruEasF4" },
    { id: "Z8JGto6TI1w" },
    { id: "bN5AgS7qz0U" },
    { id: "yYGYYBjYwu4" },
    { id: "93U1tmif6QI" },
    { id: "pKoCJkSZkiU" },
    { id: "FCZ-m7h1Gkw" },
    { id: "PSgEQV2TTBo" },
    { id: "Tc4R3_9VQeI" },
    { id: "FX5Vxc5092c" },
    { id: "sfkS3JwesKk" },
    { id: "XXgBZiDqsRc" },
    { id: "AYY8w_ZQhSo" },
    { id: "Mj7JJQGWsNc" },
    { id: "igR_eCOjGRk" },
    { id: "MHWDzTx7wG4" },
    { id: "Jaaxy3yVOf8" },
    { id: "nEyUV1l9Fv0" },
    { id: "kiUWrq4MB20" },
    { id: "oapJ1Ut2-go" },
    { id: "_1N0ol9jKug" },
    { id: "XNjoOlrfb0c" },
    { id: "itL6wDLDcfA" },
    { id: "dT6oHcjAxCs" },
    { id: "L5jeRJmydFw" },
    { id: "MNvC-YDUtzM" },
    { id: "qRRcMaEvw1E" },
    { id: "UQcgaLK3xKk" },
    { id: "4-jQQHNgPxg" },
    { id: "VA0wA6TAVtw" },
    { id: "_XREfTOvYp0" },
    { id: "-_vQzzg96u8" },
    { id: "zo89YN7pBC4" },
    { id: "pBhuIIXu_fw" },
    { id: "swjMOhCaUCo" },
    { id: "Ppk_fOcqSoo" },
    { id: "_GUWfxJzXP0" },
    { id: "_wMpl1hzejo" },
    { id: "9oaTh2Hi0Bk" },
    { id: "k1A-wCojCCg" },
    { id: "08D2ru43ee0" },
    { id: "jgTB-TB6510" },
    { id: "r3wuh_llUT8" },
    { id: "rZYP6Im7l1A" },
    { id: "SYK0qtfsuVs" },
    { id: "_EFQ0VRiNbc" },
    { id: "HmqnD_b8u_M" },
    { id: "P9rNi-LeIt0" },
    { id: "sk3OfW5pOig" },
    { id: "3fxxpBnhbZw" },
    { id: "rWodZoF-Ktk" },
    { id: "CCVKLZUQdsE" },
    { id: "sRNxVXFqIRc" },
    { id: "Nr0AOF8FcPk" },
    { id: "vXGKAyb29AE" },
    { id: "fSxEsw6Bboc" },
    { id: "L05RTD0W2sU" },
    { id: "_tbLO3RZeBc" },
    { id: "SrZbVwP7mbc" },
    { id: "1Yz_350gP2c" },
    { id: "WsgSMoIjUsM" },
    { id: "kVeR5mAp_FY" },
    { id: "vdvuTchRlTs" },
    { id: "sd6Bo9YZGzc" },
    { id: "tAZEYtgAO80" },
    { id: "661agm5U0Dg" },
    { id: "Uc68bMAxPGM" },
    { id: "YSg1m3sKfhc" },
    { id: "JmFz_5V45Ms" },
    { id: "fdDX_oJnoDg" },
    { id: "1dqJMy6buik" },
    { id: "TuySIbJsF_4" },
    { id: "qiDQKugHd5E" },
    { id: "h9zCwBOBr_g" },
    { id: "tWEmbZdPngo" },
    { id: "U67Fc54p_3w" },
    { id: "lOQ_9eULWNY" },
    { id: "eevBeTt3BQg" },
    { id: "Fd9vR3lsQVg" },
    { id: "5g-ECugIdeA" },
    { id: "DBMlvAxqgfA" },
    { id: "KAUPwvxSV64" },
    { id: "JBda7pOKlI8" },
    { id: "bt-SV0TJ-Oc" },
    { id: "HiuXYT4HaG8" },
    { id: "pDezwxg68Xo" },
    { id: "whm6GC_Q2qs" },
    { id: "r4tYCQF0ens" },
    { id: "-5w_lVreuxc" },
    { id: "YFKCVF7BqXM" },
    { id: "eivEMTEdw2A" },
    { id: "xbmSq0MXnfE" },
    { id: "ZSNN5ugdf9k" },
    { id: "2FbxQ74I9eY" },
    { id: "8QXKQ3WBz5M" },
  ];
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
  const { data, error } = await supabase.rpc("get_top_donors", {
    target_video_id: videoId,
  });
  console.log({ data });
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
  const { data, error } = await supabase.rpc("get_top_10_donors");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getTopVideos() {
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
  const { data, error } = await supabase.rpc("get_top_10_channels_by_yen");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getRecentVideos() {
  const { data, error } = await supabase.rpc("get_most_recent_videos");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getSuperchatCount(): number {
  const { data, error } = await supabase.rpc("get_superchat_count");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}

export async function getUniqueVideoCount(): number {
  const { data, error } = await supabase.rpc("get_unique_video_count");

  if (error) {
    console.error("Error calling RPC function:", error);
    return [];
  }
  return data;
}
