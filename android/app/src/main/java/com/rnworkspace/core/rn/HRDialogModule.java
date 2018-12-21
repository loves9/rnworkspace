package com.rnworkspace.core.rn;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.kaopiz.kprogresshud.KProgressHUD;
import com.rnworkspace.MainActivity;

import java.util.HashMap;
import java.util.Map;


public class HRDialogModule extends ReactContextBaseJavaModule {
    private static final String DURATION_SHORT_KEY = "TOAST_MESSAGE";

    public HRDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    /**
     * 这个函数用于返回一个字符串名字，这个名字在 JavaScript 端标记这个模块
     * 例如：NativeModules.XXXXXXXX
     *
     */
    @Override
    public String getName() {
        return "HRDialogModule";
    }

    /**
     * 返回了需要导出给 JavaScript 使用的常量。
     * 它并不一定需要实现，但在定义一些可以被 JavaScript 同步访问到的预定义的值时非常有用
     *
     *
     */
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        return constants;
    }


    /**
     * 要导出一个方法给 JavaScript 使用，Java 方法需要使用注解@ReactMethod。
     * 方法的返回类型必须为void。React Native 的跨语言访问是异步进行的，
     * 所以想要给 JavaScript 返回一个值的唯一办法是使用回调函数或者发送事件
     *
     */
    @ReactMethod
    public void toast(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void showLoading(String message) {
        KProgressHUD.create(new MainActivity())
                .setStyle(KProgressHUD.Style.SPIN_INDETERMINATE)
                .setLabel(message)
                .setCancellable(true)
                .setAnimationSpeed(2)
                .setDimAmount(0.5f)
                .show();
    }

    @ReactMethod
    public void closeLoading() {
        KProgressHUD.create(new MainActivity()).dismiss();
    }


}
