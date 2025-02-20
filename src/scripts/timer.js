class Timer {
    constructor(duration_ms = 1000,
            singleShot = true,
            autoStart = true,
            callback = function(){}) {
        this.duration_ms = duration_ms;
        this.singleShot = singleShot;
        this.autoStart = autoStart;
        this.callback = callback;
        this.running = false;
        this.paused = false;
        this.timeRemaining = this.duration_ms;
        this.startTime = 0;

        if (this.autoStart) this.Start();
    }

    Start() {
        if (!this.running) {
            this.running = true;
            this.startTime = Date.now();

            if (!this.isPaused) {
                this.timeRemaining = this.duration_ms;
                this.isPaused = false;
            }

            this.timerID = setTimeout(function(timerReference) {
                timerReference.callback();
                if (!timerReference.singleShot) {
                    timerReference.Start();
                }
            }, this.timeRemaining, this);
        }
    }

    Pause() {
        if (this.isRunning) {
            this.isRunning = false;
            this.paused = true;
            clearTimeout(this.timerID);
            timeRemaining -= Date.now() - this.startTime;
        }
    }

    Resume() {
        if (this.isPaused) this.Start();
    }

    Stop() {
        this.isPaused = false;
        this.isRunning = false;
        clearTimeout(this.timerID);
    }
}
